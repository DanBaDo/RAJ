from flask import request
from flask_jwt_extended import decode_token , create_access_token, create_refresh_token, jwt_required, current_user
from backend.models import API_KEY_PURPOSES

from backend.models import db, ROLES, STATUS, Response, TOKEN_PURPOSES, API_key

@jwt_required()
def get_api_keys():
    try:
        resp = Response()
        if current_user.role_id != ROLES["COMPANY_REPRESENTATIVE"]:
            resp.data = "Access denied. Reason: account role."
            return resp.json(), 403
        # TODO: Change for implements multiple representant for company
        company = current_user.companies[0]
        resp.message = "Your API keys"
        resp.data = [{**key.serialize(), "url": request.base_url + key.key } for key in company.api_keys]
        return resp.json(), 200
    except Exception as err:
        resp.message = "Internal server error: %s" % err
        return resp.json(), 500

@jwt_required()
def new_api_key():
    try:
        resp = Response()
        if current_user.role_id != ROLES["COMPANY_REPRESENTATIVE"]:
            resp.data = "Access denied. Reason: account role."
            return resp.json(), 403
        if request.json.get("purpose") not in API_KEY_PURPOSES:
            resp.data = "Invalid API key purpose."
            return resp.json(), 400
        # TODO: Change for implements multiple representant for company
        company = current_user.companies[0]
        current_keys = company.api_keys
        new_key = API_key(
            description = request.json.get("description"),
            purpose = API_KEY_PURPOSES[request.json.get("purpose")],
            company_id = company.id,
            key = create_refresh_token(
                current_user,
                additional_claims={
                    "purpose": TOKEN_PURPOSES["API_KEY"],
                    "company_id": company.id
                }
            )
        )
        company.api_keys.append(new_key)
        db.session.commit()
        resp.message = "Your API keys"
        resp.data = {
            "newApiKey": new_key.serialize(),
            "apiKeys": [key.serialize() for key in current_keys]
        }
        return resp.json(), 200
    except Exception as err:
        resp.message = "Internal server error: %s" % err
        return resp.json(), 500

'''
def register():
    try:
        #TODO: Data validation
        resp = Response()
        role_id = request.json.get("role")
        company_id = request.json.get("company")
        company = Company.query.get(company_id)
        if not company or role_id not in ROLES:
            resp.message = "Invalid data provided"
            return resp.json(), 400
        password_hash = generate_password_hash(request.json.get("password"))
        new_account = Account(
            name = request.json.get("name"),
            last_name = request.json.get("last_name"),
            email = request.json.get("email"),
            phone = request.json.get("phone"),
            username = request.json.get("username"),
            password_hash = password_hash,
            role = role_id,
        )
        new_account.companies.append(company)
        db.session.add(new_account)
        db.session.commit()
        confirmation_token = create_refresh_token(new_account, additional_claims={"purpose": TOKEN_PURPOSES["CONFIRMATION"]})
        # TODO: Send confirmarion toke by e-mail
        print(confirmation_token)
        resp.message = "Succesfully registration. Confirmation pending"
        resp.data = { "regCompleted": False }
        return resp.json(), 201
    except Exception as err:
        resp.message = "Internal server error: %s" % err
        return resp.json(), 500

def confirm(confirmationToken):
    try:
        resp = Response()
        try: 
            token_data = decode_token(confirmationToken)
        except Exception as err:
            resp.message = "Error decoding token: %s" % err
            return resp.json(), 400
        if token_data["purpose"] != TOKEN_PURPOSES["CONFIRMATION"]:
            resp.message = "Invalid token type provided"
            return resp.json(), 400
        user = Account.query.get(token_data["sub"])
        user.state = STATUS["ACTIVE"]
        db.session.commit()
        resp.message = "Registration completed succesfully"
        resp.data = {"token": create_access_token(user)}
        return resp.json(), 200
    except Exception as err:
        resp.message = "General conf error: %s" % err
        return resp.json(), 500

def login():
    try:
        resp = Response()
        username = request.json.get("username")
        password = request.json.get("password")
        account = Account.query.filter_by(username = username, status = STATUS["ACTIVE"]).first()
        if account and check_password_hash(account.password_hash, password):
            resp.message = "Authentication successfull"
            resp.data = create_access_token(account)
            return resp.json(), 200
        else:
            resp.message = "Invalid authentication"
            return resp.json(), 401
    except Exception as err:
        resp.message = "Internal server error: %s" % err
        return resp.json(), 500

@jwt_required()
def profile_router():
    if request.method == "GET":
        try:
            resp = Response()
            resp.message = "Your profile"
            resp.data = current_user.serialize()
            return resp.json(), 200
        except Exception as err:
            resp.message = "Internal server error: %s" % err
            return resp.json(), 500
    if request.method == "PUT":
        try:
            resp = Response()
            # TODO: Data validation
            if "name" in request.json: current_user.name = request.json["name"]
            if "last_name" in request.json: current_user.last_name = request.json["last_name"]
            if "email" in request.json: current_user.email = request.json["email"]
            if "phone" in request.json: current_user.phone = request.json["phone"]
            db.session.commit()
            resp.message = "Profile updated succesfull"
            return resp.json(), 200
        except Exception as err:
            resp.message = "Internal server error: %s" % err
            return resp.json(), 500

@jwt_required()
def request_for_remove_account():
    try:
        resp = Response()
        current_user.status = STATUS["DELETION_REQUESTED"]
        db.session.commit()
        resp.message = "Deletion requested"
        return resp.json(), 200
    except Exception as err:
        resp.message = "Internal server error: %s" % err
        return resp.json(), 500
'''
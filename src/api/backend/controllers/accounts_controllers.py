from flask import request
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import decode_token , create_access_token, create_refresh_token, jwt_required, current_user

from backend.models import Account, Company, ROLES, STATUS, Response, TOKEN_PURPOSES
from backend.models import db

def register():
    try:
        #TODO: Data validation
        resp = Response()
        role_id = request.json.get("role")
        if role_id == ROLES["AFFECTED"]:
            password_hash = generate_password_hash(request.json.get("password"))
            new_account = Account(
                name = request.json.get("name"),
                last_name = request.json.get("last_name"),
                id_doc = request.json.get("id_doc"),
                email = request.json.get("email"),
                phone = request.json.get("phone"),
                username = request.json.get("username"),
                password_hash = password_hash,
                role_id = role_id,
            )
            db.session.add(new_account)
            db.session.commit()
            confirmation_token = create_refresh_token(new_account, additional_claims={"purpose": TOKEN_PURPOSES["CONFIRMATION"]})
            # TODO: Send confirmarion toke by e-mail
            print(confirmation_token)
            resp.message = "Succesfully registration. Confirmation pending"
            resp.data = { "regCompleted": False }
            return resp.json(), 201
        elif role_id == ROLES["COMPANY_REPRESENTATIVE"]:
            password_hash = generate_password_hash(request.json.get("password"))
            new_account = Account(
                name = request.json.get("name"),
                last_name = request.json.get("last_name"),
                id_doc = request.json.get("id_doc"),
                email = request.json.get("email"),
                phone = request.json.get("phone"),
                username = request.json.get("username"),
                password_hash = password_hash,
                role_id = role_id,
            )
            new_company = Company(
                company_name = request.json.get("company_name"),
                company_id_doc = request.json.get("company_id_doc"),
                company_address = request.json.get("company_address")
            )
            db.session.add(new_company)
            new_account.companies.append(new_company)
            db.session.add(new_account)
            db.session.commit()
            confirmation_token = create_refresh_token(new_account, additional_claims={"purpose": TOKEN_PURPOSES["CONFIRMATION"]})
            # TODO: Send confirmarion token by e-mail
            print(confirmation_token)
            resp.message = "Succesfully registration. Confirmation pending"
            resp.data = { "regCompleted": False }
            return resp.json(), 201
        else:
            resp.message = "Temporary error: invalid role id: %s" % role_id
            return resp.json(), 400
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
        user.status = STATUS["ACTIVE"]
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

from telnetlib import STATUS
from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, current_user

from backend.models import Account, Company, ROLES, STATUS, Response
from backend.models import db

def register():
    response = Response()
    try:
        role_id = request.json.get("role")
        company_id = request.json.get("company")
        company = Company.query.get(company_id)
        if not company or role_id not in ROLES:
            response.message = "Invalid data provided"
            return response, 400
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
        response.message = "Succesfully registration. Confirmation pending"
        response.data = { "regCompleted": False }
        return response, 201
    except:
        response.message = "Internal server error"
        return response, 500

def confirm(confirmationToken):
    # TODO
    pass

def login():
    response = Response()
    try:
        username = request.json.get("username")
        password = request.json.get("password")
        account = Account.query.filter_by(username = username, status = STATUS["ACTIVE"]).first()
        if account and check_password_hash(account.password_hash, password):
            response.message = "Authentication successfull"
            response.data = jsonify(create_access_token(account))
            return response, 200
        else:
            response.message = "Invalid authentication"
            return response, 401
    except:
        response.message = "Internal server error"
        return response, 500

@jwt_required
def get_profile():
    try:
        response = Response()
        response.message = "Your profile"
        response.data = current_user.serialize()
        return response, 200
    except:
        response.message = "Internal server error"
        return response, 500

@jwt_required
def modify_profile():
    response = Response()
    try:
        # TODO: Data validation
        if "name" in request.json: current_user.name = request.json.name
        if "last_name" in request.json: current_user.last_name = request.json.last_name
        if "email" in request.json: current_user.email = request.json.email
        if "phone" in request.json: current_user.phone = request.json.phone
        db.session.commit()
        response.message = "Authentication succesfull"
        return response, 200
    except:
        response.message = "Internal server error"
        return response, 500

@jwt_required
def request_for_remove_account():
    response = Response()
    try:
        current_user.status = STATUS["DELETION_REQUESTED"]
        response.message = "Deletion requested"
        return response, 200
    except:
        response.message = "Internal server error"
        return response, 500
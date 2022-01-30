from flask import request
from werkzeug.security import generate_password_hash

from backend.models import Account, Company, ROLES, Response
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
    except Exception as err:
        print(err)
        response.message = "Internal server error"
        return response, 500

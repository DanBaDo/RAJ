from flask import request
from flask_jwt_extended import decode_token , create_access_token, create_refresh_token, jwt_required, current_user
from backend.models import API_KEY_PURPOSES

from backend.models import db, ROLES, STATUS, Response, TOKEN_PURPOSES, API_key

API_KEYS = [
    {
        "icon": "online",
        "title": "Poker Fight",
        "description": "instalada",
        "time": "01/08/2021",
        "url": "http://bit.ly/jd73kdu"
    },
    {
        "icon": "casino",
        "title": "Casino Ferrolano",
        "description": "pendiente",
        "time": "30/12/2021",
        "url": "http://bit.ly/jd5Ekdu"
    },
]

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
        # resp.data = [{**key.serialize(), "url": request.base_url + key.key } for key in company.api_keys]
        # Mocked API keys
        resp.data = [{"key": index, **api_key} for index, api_key in API_KEYS]
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
        '''new_key = API_key(
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
        }'''
        # Mocked API keys

        new_key = {
            "icon": "online" if request.json.get("purpose") == "APPLICATION" else "casino",
            "title": request.json.get("description"),
            "description": "pendiente",
            "time": "hoy",
            "url": "http://bit.ly/Rd3kd9"
        }
        API_KEYS.append(new_key)
        resp.data = {
            "newApiKey": new_key,
            "apiKeys": [{"key": index, **api_key} for index, api_key in API_KEYS]
        }
        return resp.json(), 200
    except Exception as err:
        resp.message = "Internal server error: %s" % err
        return resp.json(), 500

def api_binding(api_key):
    try:
        resp = Response()
        try:
            token_data = decode_token(api_key)
        except Exception as err:
            resp.message = "Error decoding token: %s" % err
            return resp.json(), 400
        if token_data["purpose"] != TOKEN_PURPOSES["API_KEY"]:
            resp.message = "Invalid api key type provided"
            return resp.json(), 400
        key = API_key.query.filter_by( key = api_key, installed = 0 ).first()
        if not key:
            resp.message = "Invalid api key provided"
            return resp.json(), 400
        key.installed = 1
        db.session.commit()
        resp.message = "Bind completed succesfully"
        resp.data = {"token": create_access_token(identity=key.company)}
        return resp.json(), 200
    except Exception as err:
        resp.message = "Internal server error: %s" % err
        return resp.json(), 500

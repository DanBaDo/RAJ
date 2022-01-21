from email import message
from flask import jsonify, request
from flask_jwt_extended import create_access_token
from api.models import User
from werkzeug.security import check_password_hash

def login():
    try:
        user = User.query.filter_by(username = request.json.get("username")).first()
        valid_password = check_password_hash(user.password_hash, request.json.get("password"))
        if valid_password:
            token = create_access_token(user)
            return jsonify(token)
        else:
            return jsonify({
                "message": "Invalid authentication",
            }), 401
    except Exception as err:
        return jsonify({
            "message": "Server error",
            "error": str(err),
        }), 500

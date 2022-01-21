from flask import request, jsonify
from werkzeug.security import generate_password_hash

from api.models import User
from api.models import db

def add_user():
    try:
        password_hash = generate_password_hash(request.json.get("password"))
        new_user = User(
            username=request.json.get("username"),
            password_hash=password_hash
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "New user added."}), 201
    except Exception as err:
        print(err)
        return jsonify({
            "message": "Error adding user",
            "error": str(err),
        }), 500
        
def get_all_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users]), 200

def get_user_by_id(user_id):
    user = User.query.get(user_id)
    if user: return jsonify(user.serialize()), 200
    return jsonify({"message": "User id: %s not found" % user_id}), 404
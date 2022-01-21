from os import environ
from flask_jwt_extended import JWTManager
from api import app
from api.models import User

app.config["JWT_SECRET_KEY"] = environ.get("JWT_SECRET_KEY")
jwt = JWTManager(app)

@jwt.user_identity_loader
def user_identity_lookup(user):
    return user.id

@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()
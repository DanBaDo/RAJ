from os import environ
from flask_jwt_extended import JWTManager
from backend import app
from backend.models import Account

app.config["JWT_SECRET_KEY"] = environ.get("JWT_SECRET_KEY")
jwt = JWTManager(app)

@jwt.user_identity_loader
def user_identity_lookup(account):
    return account.id

@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return Account.query.filter_by(id=identity).one_or_none()
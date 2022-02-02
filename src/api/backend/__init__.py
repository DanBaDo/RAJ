# Standar modules imports
from os import environ
# Pip modules imports
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
# Local imports
from backend.models import db

# Configure Flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DB_CONNECTION_STRING')
MIGRATE = Migrate(app, db)
db.init_app(app)
CORS(app)

# Add access control
from backend import access_control

# Add app endpoints
from backend import endpoints
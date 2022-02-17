from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from api.backend.models.accounts import *
from backend.models.generics import *
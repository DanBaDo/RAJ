from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from backend.models.generics import *
from backend.models.api_keys import *
from backend.models.accounts import *

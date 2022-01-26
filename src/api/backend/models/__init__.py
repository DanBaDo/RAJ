from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from backend.models.ORMobjects import *
from backend.models.generics import *
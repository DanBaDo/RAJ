from backend import app
from backend.controllers.authentication_controllers import *

app.add_url_rule("/login/", methods=["POST"], view_func=login) 
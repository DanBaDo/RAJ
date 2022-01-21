from api import app
from api.controllers.authentication_controllers import *

app.add_url_rule("/login/", methods=["POST"], view_func=login) 
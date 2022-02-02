from backend import app
from backend.controllers.accounts_controllers import *

app.add_url_rule("/register/", methods=["POST"], view_func=register)
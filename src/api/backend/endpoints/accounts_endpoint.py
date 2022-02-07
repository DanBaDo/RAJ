from backend import app
from backend.controllers.accounts_controllers import register, login, get_profile, modify_profile

app.add_url_rule("/register/", methods=["POST"], view_func=register)
# TODO: app.add_url_rule("/confirmation/{confirmationToken}", view_func=confirm)
app.add_url_rule("/login/", methods=["POST"], view_func=login)
app.add_url_rule("/profile/", methods=["GET"], view_func=get_profile)
app.add_url_rule("/profile/", methods=["PUT"], view_func=modify_profile)
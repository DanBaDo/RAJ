from backend import app
from backend.controllers.accounts_controllers import register, confirm, login, profile_router, request_for_remove_account

app.add_url_rule("/register/", methods=["POST"], view_func=register)
app.add_url_rule("/confirmation/<string:confirmationToken>", methods=["GET"], view_func=confirm)
app.add_url_rule("/login/", methods=["POST"], view_func=login)
app.add_url_rule("/profile/", methods=["GET", "PUT"], view_func=profile_router)
app.add_url_rule("/profile/", methods=["DELETE"], view_func=request_for_remove_account)

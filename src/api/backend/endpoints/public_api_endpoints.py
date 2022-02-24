from backend import app
from backend.controllers.public_api_controllers import get_api_keys

app.add_url_rule("/apikeys/", methods=["GET"], view_func=get_api_keys)
#app.add_url_rule("/apikeys/", methods=["POST"], view_func=new_api_key)

'''
app.add_url_rule("/register/", methods=["POST"], view_func=register)
app.add_url_rule("/confirmation/<string:confirmationToken>", methods=["GET"], view_func=confirm)

#app.add_url_rule("/profile/", methods=["PUT"], view_func=modify_profile)
app.add_url_rule("/profile/", methods=["GET", "PUT"], view_func=profile_router)
app.add_url_rule("/profile/", methods=["DELETE"], view_func=request_for_remove_account)
'''
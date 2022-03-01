from backend import app
from backend.controllers.public_api_controllers import get_api_keys, new_api_key, api_binding

app.add_url_rule("/apikeys/", methods=["GET"], view_func=get_api_keys)
app.add_url_rule("/apikeys/", methods=["POST"], view_func=new_api_key)
app.add_url_rule("/login/device/<string:api_key>", methods=["GET"], view_func=api_binding)

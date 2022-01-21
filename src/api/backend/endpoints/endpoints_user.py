from backend import app
from backend.controllers.users_controllers import *

app.add_url_rule("/users/", methods=["GET"], view_func=get_all_users)
app.add_url_rule("/users/<int:user_id>/", methods=["GET"], view_func=get_user_by_id)
app.add_url_rule("/users/", methods=["POST"], view_func=add_user)

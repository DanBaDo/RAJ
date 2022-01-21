from api import app
from api.controllers.characters_controllers import *

app.add_url_rule("/characters/", methods=["GET"], view_func=get_all_characters)
app.add_url_rule("/characters/<int:character_id>/", methods=["GET"], view_func=get_character_by_id)
app.add_url_rule("/characters/", methods=["POST"], view_func=add_character)

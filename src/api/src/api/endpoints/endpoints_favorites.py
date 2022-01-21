from api import app
from api.controllers.favorites_controllers import *

app.add_url_rule("/users/planets/<int:planet_id>", methods=["POST"], view_func=add_favorite_planet)
app.add_url_rule("/users/<int:user_id>/planets/", methods=["GET"], view_func=get_favorite_planets)
app.add_url_rule("/users/planets/<int:planet_id>", methods=["DELETE"], view_func=drop_favorite_planet)
app.add_url_rule("/users/characters/<int:character_id>", methods=["POST"], view_func=add_favorite_character)
app.add_url_rule("/users/<int:user_id>/characters/", methods=["GET"], view_func=get_favorite_characters)
app.add_url_rule("/users/characters/<int:character_id>", methods=["DELETE"], view_func=drop_favorite_character)

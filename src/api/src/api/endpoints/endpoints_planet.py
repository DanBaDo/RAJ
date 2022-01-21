from api import app
from api.controllers.planets_controllers import *

app.add_url_rule("/planets/", methods=["GET"], view_func=get_all_planets)
app.add_url_rule("/planets/<int:planet_id>/", methods=["GET"], view_func=get_planet_by_id)
app.add_url_rule("/planets/", methods=["POST"], view_func=add_planet)

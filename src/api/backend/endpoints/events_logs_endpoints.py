from backend import app
from backend.controllers.events_log_controllers import get_events

app.add_url_rule("/events_log/<string:role>/<int:page>", methods=["GET"], view_func=get_events)

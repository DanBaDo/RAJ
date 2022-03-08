from backend.models import LogEvent, db

class Log:
    def __init__(self, event_type, source_type, target_type):
        self.model = LogEvent(
            event_type = event_type,
            source_type = source_type,
            target_type = target_type
        )
    def write(self, source_id, tarjet_id):
        self.model.source_id = source_id
        self.model.target_id = tarjet_id
        db.session.add(self.model)
        db.commit()
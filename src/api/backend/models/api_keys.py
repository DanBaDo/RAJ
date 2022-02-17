from backend.models import db

class API_key(db.Model):
    key = db.Column(db.String(262), primary_key=True)
    description = db.Column(db.String(100), nullable=False)
    installed = db.Column(db.String(5), nullable=False)
    def __repr__(self):
        return '<API key : %s >' % (self.description)
    def serialize(self):
        return { "key": self.key, "description": self.description, "installed": self.installed }

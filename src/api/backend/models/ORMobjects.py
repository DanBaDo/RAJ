from api.models import db

aux_planets = db.Table('planets',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('planet_id', db.Integer, db.ForeignKey('planet.id'), primary_key=True)
)

aux_characters = db.Table('characters',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('character_id', db.Integer, db.ForeignKey('character.id'), primary_key=True)
)

class User(db.Model):
    __tablename__="user"
    id=db.Column(db.Integer, primary_key=True)
    username=db.Column(db.String(250), nullable=False, unique=True)
    password_hash=db.Column(db.String(250))
    planets = db.relationship('Planet', secondary=aux_planets, lazy='subquery',
        backref=db.backref('users', lazy=True))
    characters = db.relationship('Character', secondary=aux_characters, lazy='subquery',
        backref=db.backref('users', lazy=True))
    def __repr__(self):
        return '<User id: %r - %s>' % (self.id, self.username)
    def serialize(self):
        return { "id": self.id, "username": self.username }

class Character(db.Model):
    __tablename__="character"
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(250), nullable=False, unique=True)
    description=db.Column(db.String(512), nullable=False)
    img_path=db.Column(db.String(256))
    def __repr__(self):
        return '<Character id: %r - %s>' % (self.id, self.name)
    def serialize(self):
        return { "id": self.id, "name": self.name, "description": self.description }

class Planet(db.Model):
    __tablename__="planet"
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(250), nullable=False, unique=True)
    description=db.Column(db.String(512), nullable=False)
    img_path=db.Column(db.String(256))
    def __repr__(self):
        return '<Planet id: %r - %s>' % (self.id, self.name)
    def serialize(self):
        return { "id": self.id, "name": self.name, "description": self.description, "img_path": self.img_path }


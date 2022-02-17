from backend.models import db

class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    last_name = db.Column(db.String(250), nullable=False)
    email = db.Column(db.String(250), nullable=False)
    phone = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(250), nullable=False, unique=True)
    password_hash = db.Column(db.String(250), nullable=False)
    status = db.Column(db.Integer, nullable=False, default=0)
    role = db.Column(db.String(3), nullable=False)
    companies = db.relationship('Company', secondary="account_company_relationship", lazy='subquery',
        backref = db.backref('accounts', lazy=True))
    def __repr__(self):
        return '<Account id: %r - %s>' % (self.id, self.username)
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email,
            "phone": self.phone,
            "username": self.username,
        }

class Company(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False, unique=True)
    NIF = db.Column(db.String(15), nullable=False)
    address = db.Column(db.String(256))
    def __repr__(self):
        return '<Company id: %r - %s>' % (self.id, self.name)
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "NIF": self.NIF,
            "address": self.address
        }

class Roll(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(50), nullable=False)
    def __repr__(self):
        return '<Roll id: %r - %s>' % (self.id, self.description)
    def serialize(self):
        return { "id": self.id, "description": self.description }

account_company_relationship = db.Table('account_company_relationship',
    db.Column('account_id', db.Integer, db.ForeignKey(Account.id), primary_key=True),
    db.Column('company_id', db.Integer, db.ForeignKey(Company.id), primary_key=True)
)

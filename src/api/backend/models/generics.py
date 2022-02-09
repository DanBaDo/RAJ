from flask import jsonify

ROLES = {
    "AFT": "Affected",
    "RPR": "Company representative",
    "BTM": "Best man",
}

STATUS = {
    "UNCONFIRMED": 0,
    "ACTIVE": 1,
    "DELETION_REQUESTED": 2,
    "DEACTIVATED": 3
}

class Response:
    message = ""
    data = None
    def json(self):
        return jsonify(
            {
                "message": self.message,
                "data": self.data
            }
        )

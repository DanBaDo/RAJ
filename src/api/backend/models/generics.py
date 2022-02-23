from flask import jsonify

ROLES = {
    "AFFECTED": "AFT",
    "COMPANY_REPRESENTATIVE": "RPR",
    "BEST_MAN": "BTM",
    "STAFF": "STF",
}

STATUS = {
    "UNCONFIRMED": 0,
    "ACTIVE": 1,
    "DELETION_REQUESTED": 2,
    "DEACTIVATED": 3
}

TOKEN_PURPOSES = {
    "CONFIRMATION": "Confirmation",
    "AUTHENTICATION": "Authentication",
    "API_KEY": "API key"
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

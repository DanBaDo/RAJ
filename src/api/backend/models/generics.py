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
    "CONFIRMATION": 0,
    "AUTHENTICATION": 1,
    "API_KEY": 2
}

API_KEY_PURPOSES = {
    "APPLICATION": 0,
    "IOT": 1
}

EVENT_TYPES = {
    "SIGNUP": 0,
    "EMAIL_CONFIRMATION": 1,
    "LOGIN": 2,
    "PROFILE_GET": 3,
    "PROFILE_UPDATE": 4,
    "LEAVE_REQUEST": 5,
    "LEAVE": 6,
    "API_KEY_CREATION": 7,
    "API_KEY_INSTALLATION": 8,
    "API_KEY_DELETION": 9,
    "ID_VERIFICATION": 10
}

EVENT_AGENT_TYPES = {
    "API_KEY": 0,
    "ACCOUNT": 1,
}

class Response:
    message = ""
    data = None
    def json(self):
        return jsonify({
            "message": self.message,
            "data": self.data
        })

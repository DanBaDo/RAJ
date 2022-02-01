from flask import jsonify

ROLES = {
    "AFT": "Affected",
    "RPR": "Company representative",
    "BTM": "Best man",
}

class Response:
    message = ""
    data = None
    def __str__(self):
        return jsonify(
            {
                "message": self.message,
                "data": self.data
            }
        )

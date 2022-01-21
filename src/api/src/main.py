from os import environ
from api import app

# Run app
if __name__ == '__main__':
    PORT = int(environ.get('FLASK_PORT', 3000))
    app.run(host='0.0.0.0', port=PORT, debug=False)
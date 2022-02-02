## Installation

You will need Python3 installed in your system.

### Configuration

Review and modify configurations in `./.env` if you like.

### Install dependencies into virtual environment (Linux/Mac version)

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Create database
Start by removing existent database (if any).
```bash
rm sqlite/star_wars.db
rm migrations -rf
```
Create the new database.
```bash
flask db init
flask db migrate
flask db upgrade
```

### Run

```bash
flask run
```
### Testing
You can find a [Insomnia](https://insomnia.rest/) file in '''insomnia/insomnia.json''' for testing the API.
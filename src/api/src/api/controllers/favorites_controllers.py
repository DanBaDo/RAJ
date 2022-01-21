from flask import jsonify
from flask_jwt_extended import jwt_required, current_user
from api.models import Character, Planet, User
from api import db

@jwt_required()
def add_favorite_planet(planet_id):
    try:
        planet = Planet.query.get(planet_id)
        current_user.planets.append(planet)
        db.session.commit()
    except Exception as err:
        print(str(err))
        return jsonify({
            "message": "Error adding new favorite planet",
            "error": str(err),
        }), 500
    return  jsonify({"message": "New planet added to favorites"}), 201

def get_favorite_planets(user_id):
    favorite_planets = User.query.get(user_id).planets
    return jsonify(
        [planet.serialize() for planet in favorite_planets]
    )

@jwt_required()
def drop_favorite_planet(planet_id):
    try:
        planet = Planet.query.get(planet_id)
        current_user.planets.remove(planet)
        db.session.commit()
    except Exception as err:
        print(str(err))
        return jsonify({
            "message": "Error removing favorite planet",
            "error": str(err),
        }), 500
    return  jsonify({"message": "Planet removed from favorites"}), 201

@jwt_required()
def add_favorite_character(character_id):
    try:
        character = Character.query.get(character_id)
        current_user.characters.append(character)
        db.session.commit()
    except Exception as err:
        print(str(err))
        return jsonify({
            "message": "Error adding character to favorites",
            "error": str(err),
        }), 500
    return  jsonify({"message": "Character added to favorites"}), 201

def get_favorite_characters(user_id):
    favorite_characters = User.query.get(user_id).characters
    return jsonify(
        [character.serialize() for character in favorite_characters]
    )

@jwt_required()
def drop_favorite_character(character_id):
    try:
        character = Character.query.get(character_id)
        current_user.characters.remove(character)
        db.session.commit()
    except Exception as err:
        print(str(err))
        return jsonify({
            "message": "Error removing character from favorites",
            "error": str(err),
        }), 500
    return  jsonify({"message": "Character removed from favorites"}), 201
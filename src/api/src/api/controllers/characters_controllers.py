from api.models import Character
from api.models import db
from flask import request, jsonify

def add_character():
    try:
        new_caracter = Character(**request.json)
        db.session.add(new_caracter)
        db.session.commit()
        return jsonify({"message": "New character added."}), 201
    except Exception as err:
        print(err)
        return jsonify({
            "message": "Error adding character",
            "error": err,
        }), 500
        
def get_all_characters():
    characters = Character.query.all()
    return jsonify([character.serialize() for character in characters]), 200

def get_character_by_id(character_id):
    character = Character.query.get(character_id)
    if character: return jsonify(Character.query.get(character_id).serialize()), 200
    return jsonify({"message": "Character id: %s not found" % character_id}), 404
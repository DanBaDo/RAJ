from api.models import Planet
from api.models import db
from flask import request, jsonify

def add_planet():
    try:
        new_planet = Planet(**request.json)
        db.session.add(new_planet)
        db.session.commit()
        return jsonify({"message": "New planet added."}), 201
    except Exception as err:
        print(err)
        return jsonify({
            "message": "Error adding planet",
            "error": err,
        }), 500
        
def get_all_planets():
    planets = Planet.query.all()
    return jsonify([planet.serialize() for planet in planets]), 200

def get_planet_by_id(planet_id):
    planet = Planet.query.get(planet_id)
    if planet: return jsonify(Planet.query.get(planet_id).serialize()), 200
    return jsonify({"message": "Planet id: %s not found" % planet_id}), 404
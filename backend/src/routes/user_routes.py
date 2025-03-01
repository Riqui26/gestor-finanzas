# ====================================================================
# 📌 RUTAS DE USUARIO - Flask Blueprint
# ====================================================================
# ! Importamos librerías necesarias
from flask import Blueprint, request, jsonify
from src.controllers.user_controller import create_user, get_all_users, get_user_by_id, update_user, delete_user

# ? Creamos un Blueprint para las rutas de usuario
user_bp = Blueprint("user_bp", __name__)

# ============================================================== 
# 🆕 Crear un nuevo usuario (POST)
# ============================================================== 
@user_bp.route("/", methods=["POST"])
def create_user_route():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Datos inválidos"}), 400
    user = create_user(data)
    return jsonify(user), 201

# ============================================================== 
# 📋 Obtener todos los usuarios (GET)
# ============================================================== 
@user_bp.route("/", methods=["GET"])
def get_all_users_route():
    users = get_all_users()
    return jsonify(users), 200

# ============================================================== 
# 🔎 Obtener un usuario por ID (GET)
# ============================================================== 
@user_bp.route("/<int:user_id>", methods=["GET"])
def get_user_by_id_route(user_id):
    user = get_user_by_id(user_id)
    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404
    return jsonify(user), 200

# ============================================================== 
# ✏️ Actualizar usuario (PUT)
# ============================================================== 
@user_bp.route("/<int:user_id>", methods=["PUT"])
def update_user_route(user_id):
    data = request.get_json()
    user = update_user(user_id, data)
    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404
    return jsonify(user), 200

# ============================================================== 
# ❌ Eliminar usuario (DELETE)
# ============================================================== 
@user_bp.route("/<int:user_id>", methods=["DELETE"])
def delete_user_route(user_id):
    result = delete_user(user_id)
    if not result:
        return jsonify({"error": "Usuario no encontrado"}), 404
    return jsonify(result), 200

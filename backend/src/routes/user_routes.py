# ====================================================================
# 🌐 RUTAS DE USUARIO
# ====================================================================

from flask import Blueprint, request, jsonify
from src.controllers.user_controller import (
    create_user,
    get_user_by_id,
    get_all_users,
    update_user,
    delete_user
)

user_bp = Blueprint('user_bp', __name__)

# ==============================================================
# 📋 GET - Obtener todos los usuarios
# Ruta: /api/users
# ==============================================================
@user_bp.route('/', methods=['GET'])
def get_users():
    users = get_all_users()
    return jsonify(users)

# ==============================================================
# 🔎 GET - Obtener un usuario específico por ID
# Ruta: /api/users/<user_id>
# ==============================================================
@user_bp.route('/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = get_user_by_id(user_id)
    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404
    return jsonify(user)

# ==============================================================
# 🆕 POST - Crear un nuevo usuario
# Ruta: /api/users
# ==============================================================
@user_bp.route('/', methods=['POST'])
def create_new_user():
    data = request.json
    nuevo_usuario = create_user(data)
    return jsonify(nuevo_usuario), 201

# ==============================================================
# ✏️ PUT - Actualizar un usuario existente
# Ruta: /api/users/<user_id>
# ==============================================================
@user_bp.route('/<int:user_id>', methods=['PUT'])
def update_existing_user(user_id):
    data = request.json
    user = update_user(user_id, data)
    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404
    return jsonify(user)

# ==============================================================
# ❌ DELETE - Eliminar un usuario
# Ruta: /api/users/<user_id>
# ==============================================================
@user_bp.route('/<int:user_id>', methods=['DELETE'])
def delete_existing_user(user_id):
    result = delete_user(user_id)
    if not result:
        return jsonify({"error": "Usuario no encontrado"}), 404
    return jsonify(result)

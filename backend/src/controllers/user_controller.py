# ====================================================================
# 🎛️ CONTROLADOR DE USUARIO
# ====================================================================
# ! Importamos librerías necesarias
from src.models.user_model import db, User
from werkzeug.security import generate_password_hash, check_password_hash

# ==============================================================
# 🆕 Crear un nuevo usuario
# ==============================================================
def create_user(data):
    hashed_password = generate_password_hash(data["password"])  # Encripta la contraseña
    new_user = User(
        nombre=data["nombre"],
        apellido=data["apellido"],
        email=data["email"],
        password=hashed_password
    )
    db.session.add(new_user)
    db.session.commit()
    return new_user.to_json()

# ==============================================================
# 🔎 Obtener un usuario por ID
# ==============================================================
def get_user_by_id(user_id):
    user = User.query.get(user_id)
    return user.to_json() if user else None

# ==============================================================
# 📋 Obtener todos los usuarios
# ==============================================================
def get_all_users():
    users = User.query.all()
    return [user.to_json() for user in users]

# ==============================================================
# ✏️ Actualizar datos de un usuario
# ==============================================================
def update_user(user_id, data):
    user = User.query.get(user_id)
    if not user:
        return None
    user.nombre = data.get("nombre", user.nombre)
    user.apellido = data.get("apellido", user.apellido)
    db.session.commit()
    return user.to_json()

# ==============================================================
# ❌ Eliminar un usuario
# ==============================================================
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return None
    db.session.delete(user)
    db.session.commit()
    return {"message": "Usuario eliminado"}
# ============================================================
# 📌 VALIDATION UTILS USERS
# ============================================================
def validate_user_data(data):
    if "nombre" not in data or not data["nombre"].strip():
        return "El nombre es obligatorio"
    if "apellido" not in data or not data["apellido"].strip():
        return "El apellido es obligatorio"
    if "email" not in data or "@" not in data["email"]:
        return "El email es inválido"
    if "password" not in data or len(data["password"]) < 6:
        return "La contraseña debe tener al menos 6 caracteres"
    return None
# ====================================================================
# 🎛️ CONTROLADOR DE CUENTA
# ====================================================================
from flask import request, jsonify
from src.models.account_model import Account
from src.database.db_mysql import execute_query  # Usaremos esta función para interactuar con la base de datos
from utils.helpers import create_response
from functools import wraps
from app import db

# ====================================================================
# 🛡️ Función de Autenticación: Verificar si el usuario está autenticado
# ====================================================================
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not hasattr(request, 'user'):  # Verificamos si el usuario está autenticado
            return create_response(401, "Usuario no autenticado")
        return f(*args, **kwargs)
    return decorated_function

# ====================================================================
# 🆕 Crear una nueva cuenta
# ====================================================================
@login_required  # Usamos el decorador para asegurar que el usuario esté autenticado
def create_account():
    user_id = request.user.id  # Obtenemos el ID del usuario autenticado
    data = request.get_json()  # Obtenemos los datos de la solicitud

    # Extraemos los datos necesarios
    nombre = data.get('nombre')
    tipo = data.get('tipo')
    saldo_inicial = data.get('saldo_inicial', 0.00)  # Valor por defecto si no se proporciona
    moneda = data.get('moneda')

    # Validamos los campos obligatorios
    if not nombre or not tipo or not moneda:
        return create_response(400, "Faltan campos obligatorios")

    # Validación de tipo de cuenta
    if tipo not in ['banco', 'efectivo', 'billetera']:
        return create_response(400, "Tipo de cuenta inválido")

    # Validación de moneda
    if moneda not in ['ARS', 'USD']:
        return create_response(400, "Moneda inválida")

    # Validación de saldo (debe ser un número positivo)
    if saldo_inicial < 0:
        return create_response(400, "El saldo inicial no puede ser negativo")

    # Creamos la cuenta con los datos validados
    new_account = Account(
        user_id=user_id,
        nombre=nombre,
        tipo=tipo,
        saldo=saldo_inicial,
        moneda=moneda
    )

    try:
        # Guardamos la cuenta en la base de datos
        execute_query('INSERT INTO accounts (user_id, nombre, tipo, saldo, moneda) VALUES (%s, %s, %s, %s, %s)', 
                      (user_id, nombre, tipo, saldo_inicial, moneda))

        # Confirmamos la creación de la cuenta
        return create_response(201, "Cuenta creada con éxito", data=new_account.to_dict())
    except Exception as e:
        # En caso de error, devolvemos el error
        return create_response(500, f"Error al crear la cuenta: {str(e)}")

# ====================================================================
# 🔎 Obtener las cuentas de un usuario
# ====================================================================
@login_required  # Usamos el decorador para asegurar que el usuario esté autenticado
def get_user_accounts():
    """
    Obtiene todas las cuentas de un usuario con paginación.
    """
    user_id = request.user.id  # Obtenemos el ID del usuario autenticado

    # Obtención de parámetros de paginación
    page = request.args.get('page', 1, type=int)  # Página por defecto es 1
    per_page = request.args.get('per_page', 10, type=int)  # Registros por página, por defecto 10

    # Consultamos las cuentas del usuario con paginación
    query = "SELECT * FROM accounts WHERE user_id = %s LIMIT %s OFFSET %s"
    accounts = execute_query(query, (user_id, per_page, (page - 1) * per_page))

    # Verificamos si el usuario tiene cuentas
    if not accounts:
        return create_response(404, "No se encontraron cuentas para este usuario")

    # Devolvemos las cuentas en formato JSON
    return create_response(200, "Cuentas obtenidas con éxito", data=accounts)

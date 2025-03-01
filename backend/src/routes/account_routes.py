# ====================================================================
# 🎛️ RUTAS DE CUENTAS
# ====================================================================

# Importamos las librerías necesarias
from flask import Blueprint
from src.controllers.account_controller import (create_account, get_user_accounts)

# * Definir Blueprint para las rutas de cuentas
account_bp = Blueprint('account_bp', __name__)

# ====================================================================
# 🆕 Ruta para crear una cuenta
# ====================================================================
@account_bp.route('/create', methods=['POST'])
def create_account_route():
    """
    Ruta para crear una nueva cuenta.
    """
    return create_account()

# ====================================================================
# 🔎 Ruta para obtener todas las cuentas de un usuario
# ====================================================================
@account_bp.route('/', methods=['GET'])
def get_user_accounts_route():
    """
    Ruta para obtener todas las cuentas de un usuario autenticado.
    """
    return get_user_accounts()

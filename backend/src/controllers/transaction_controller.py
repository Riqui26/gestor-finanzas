# ====================================================================
# 🎛️ CONTROLADOR DE TRANSACCION
# ====================================================================
# ! Importamos librerías necesarias
from flask import request, jsonify
from models.transaction_model import Transaction
from models.account_model import Account
from app import db
from utils.helpers import create_response

# 📝 Endpoint para realizar una transferencia
def transfer_funds():
    """
    Realiza una transferencia entre dos cuentas.
    """
    # 🔒 Validamos que el usuario esté autenticado
    user_id = request.user.id  # Asumimos que el usuario está autenticado
    data = request.get_json()

    # 📥 Extraemos los datos necesarios de la solicitud
    account_from_id = data.get('account_from_id')  # Cuenta de origen
    account_to_id = data.get('account_to_id')  # Cuenta de destino
    amount = data.get('amount')  # Monto a transferir

    # ✅ Verificamos que el monto sea válido
    if amount <= 0:
        return create_response(400, "El monto debe ser mayor a 0")

    # 🔍 Buscamos las cuentas involucradas
    account_from = Account.query.filter_by(id=account_from_id, user_id=user_id).first()
    account_to = Account.query.filter_by(id=account_to_id).first()

    # ❌ Verificamos que ambas cuentas existan
    if not account_from:
        return create_response(404, "Cuenta de origen no encontrada")
    
    if not account_to:
        return create_response(404, "Cuenta de destino no encontrada")

    # 💸 Verificamos que la cuenta de origen tenga saldo suficiente
    if account_from.saldo < amount:
        return create_response(400, "Saldo insuficiente en la cuenta de origen")

    # 📝 Creamos la transacción de transferencia
    try:
        # * Restamos el monto de la cuenta de origen
        account_from.saldo -= amount

        # * Sumamos el monto a la cuenta de destino
        account_to.saldo += amount

        # * Guardamos las cuentas con los nuevos saldos
        db.session.commit()

        # 💼 Registramos la transacción en la base de datos
        transaction = Transaction(
            user_id=user_id,
            account_id=account_from_id,
            tipo='transferencia',
            monto=amount,
            cuenta_destino=account_to_id
        )
        db.session.add(transaction)
        db.session.commit()

        # ✅ Confirmamos la transferencia
        return create_response(200, "Transferencia realizada con éxito")
    except Exception as e:
        # ❌ En caso de error, revertimos los cambios
        db.session.rollback()
        return create_response(500, f"Error en la transferencia: {str(e)}")

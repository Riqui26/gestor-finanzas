# ====================================================================
# 🧪 TESTS DE USUARIOS
# ====================================================================

# ! Importamos librerías necesarias
import sys
import os

# * Agregamos la raíz del proyecto al sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../../")))

from app import app, db  # Ahora sí podrá importar app
import pytest
from flask import json
from src.models.user_model import User

# ? Configuración de cliente de pruebas
@pytest.fixture
def client():
    app.config['TESTING'] = True  # Activamos modo de prueba
    with app.test_client() as client:
        with app.app_context():
            db.create_all()  # Crea la BD de pruebas
        yield client
        with app.app_context():
            db.drop_all()  # Elimina la BD de pruebas después del test

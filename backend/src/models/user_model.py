# ====================================================================
# 👤 MODELO DE USUARIO - SQLAlchemy
# ====================================================================
# ! Importamos librerías necesarias
from src.database.db_mysql import db
from werkzeug.security import generate_password_hash
from datetime import datetime

class User(db.Model):
    __tablename__ = 'users'

    # 🎯 Definición de los campos de la tabla
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(100), nullable=False)
    apellido = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    fecha_creacion = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp())

    def __init__(self, nombre, apellido, email, password):
        self.nombre = nombre
        self.apellido = apellido
        self.email = email
        self.password = password

    # 🤖 Convierte el objeto User a un diccionario JSON para facilitar su uso en respuestas de API.
    def to_json(self, include_email=False):
        user_data = {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "fecha_creacion": self.fecha_creacion.strftime('%Y-%m-%d %H:%M:%S')
        }
        if include_email:
            user_data["email"] = self.email
        return user_data

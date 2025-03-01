# ====================================================================
# 🚀 PUNTO DE ENTRADA PRINCIPAL DE LA APLICACIÓN (FLASK APP)
# ====================================================================

# ! Importamos librerías necesarias
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os
from src.database.db_mysql import db
from src.routes.user_routes import user_bp

# ? Cargamos variables de entorno
load_dotenv()

# * Crear instancia de la aplicación Flask
app = Flask(__name__)

# * Configuración de la base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///default.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
if not app.config['SECRET_KEY']:
    raise ValueError("SECRET_KEY no configurada en .env")


# * Configuración para pruebas 🧪
app.config['TESTING'] = True


# * Inicializar la instancia de SQLAlchemy con la aplicación Flask
db.init_app(app)

# * Configurar CORS (permitimos acceso desde el frontend)
CORS(app, resources={r"/*": {"origins": "*"}})

# * Registrar los Blueprints (rutas)
app.register_blueprint(user_bp, url_prefix='/api/users')

# * Definir una ruta raíz para verificar que funcione
@app.route('/')
def index():
    return {"message": "Gestor Finanzas Backend - Running!"}

# * Ejecutar la app
if __name__ == '__main__':
    app.run(
        host=os.getenv('FLASK_RUN_HOST', '127.0.0.1'),
        port=int(os.getenv('FLASK_RUN_PORT', 5000)),
        debug=os.getenv('FLASK_DEBUG', 'False') == 'True'
    )
# ====================================================================
# 🚀 PUNTO DE ENTRADA PRINCIPAL DE LA APLICACIÓN (FLASK APP)
# ====================================================================

# ! Importamos librerías necesarias
import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from src.database import db 

# ! Importamos las rutas registradas
from src.routes.user_routes import user_bp
#from src.routes.account_routes import account_bp
#from src.routes.transaction_routes import transaction_bp

# ? Cargamos variables de entorno
load_dotenv()

# * Crear instancia de la aplicación Flask
app = Flask(__name__)

# * Configuración de la base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///default.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# * Inicializar la instancia de SQLAlchemy con la aplicación Flask
db.init_app(app)

# * Configurar app desde variables de entorno
app.config['ENV'] = os.getenv('FLASK_ENV', 'production')
app.config['DEBUG'] = os.getenv('FLASK_DEBUG', 'False') == 'True'
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'defaultsecretkey')

# * Configurar CORS (permitimos acceso desde el frontend)
CORS(app, resources={r"/*": {"origins": "*"}})

# * Registrar los Blueprints (rutas)
app.register_blueprint(user_bp, url_prefix='/api/users')
# app.register_blueprint(transaction_bp, url_prefix='/api/transactions')
# app.register_blueprint(account_bp, url_prefix='/api/accounts')

# * Definir una ruta raíz para verificar que funcione
@app.route('/')
def index():
    return {"message": "Gestor Finanzas Backend - Running!"}

# * Ejecutar la app
if __name__ == '__main__':
    app.run(
        host=os.getenv('FLASK_RUN_HOST', '127.0.0.1'),
        port=int(os.getenv('FLASK_RUN_PORT', 5000)),
        debug=app.config['DEBUG']
    )

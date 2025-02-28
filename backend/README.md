📦 Descripción por Carpeta
    📂 src/routes/      Contiene las rutas (endpoints) de la API, organizadas por entidad:

        user_routes.py: Rutas de usuarios (registro, login, perfil).
        transaction_routes.py: Rutas de transacciones (alta, baja, listado).
        account_routes.py: Rutas de cuentas (creación, consulta de saldo).
    
    📂 src/controllers/     Lógica de negocio y procesamiento de cada entidad. Conectan las rutas con los modelos:

    user_controller.py: Lógica de usuarios.
    transaction_controller.py: Lógica de transacciones.
    account_controller.py: Lógica de cuentas.
    
    📂 src/models/      Define las estructuras de datos y cómo se almacenan en la base de datos:

    user_model.py: Modelo de usuario.
    transaction_model.py: Modelo de transacción.
    account_model.py: Modelo de cuenta.
    
    📂 src/database/        Configuración de la conexión a la base de datos:

    db_mysql.py: Conexión a MySQL y funciones para ejecutar queries.
    
    📂 src/services/        Servicios especializados que aportan funcionalidades avanzadas:

    whatsapp_service.py: Procesa comprobantes de WhatsApp.
    report_service.py: Genera reportes PDF/Excel.
    prediction_service.py: Predice gastos futuros.
    
    📂 src/utils/       Utilidades y funciones de apoyo:

    helpers.py: Funciones generales (formateo, cálculos, etc.).
    validators.py: Validaciones (DNI, fechas, montos).
    
    📂 src/tests/       Pruebas unitarias y de integración para cada módulo:

    test_users.py
    test_transactions.py
    test_accounts.py
    
    📄 Archivos raíz

    app.py	            Punto de entrada principal que inicializa la app Flask.
    configuracion.py	Configuración general (DB, entorno, puertos).
    .env	            Variables de entorno (host, user, password).
    requirements.txt	Dependencias necesarias.
    .gitignore	        Archivos/carpetas ignorados en Git.
    migrations/	        (Opcional) Scripts de migración de la DB.



Crear entorno virtual
cd backend
    friqu@federico MINGW64 /d/Jarvis/finanzas/backend
python -m venv venv

Activar entorno
$ source venv/Scripts/activate
(venv) 

Instalar dependencias
pip install -r requirements.txt
o
pip install Flask Flask-SQLAlchemy Flask-Migrate Flask-Cors Flask-Login Flask-Env Flask-RESTful Flask-Mail Flask-WTF mysql-connector-python python-dotenv pandas openai Flask-JWT-Extended Flask-API Flask-Caching Flask-Admin Flask-Session Flask-Accepts requests gunicorn pytest Flask-Testing Celery

Listar dependencias instaladas
pip list

Ejecucion
python app.py

Para probar la conexión
friqu@federico MINGW64 /d/Jarvis/finanzas/backend/src/database
$ python db_mysql.py
✅ Conexión exitosa a la base de datos
✅ Conexión cerrada

Ver la BD
friqu@federico MINGW64 /d/Jarvis/finanzas/backend
$ mysql -u root -p


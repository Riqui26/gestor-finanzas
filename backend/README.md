# 📂 **Estructura Backend - Gestor de Finanzas Personales**

---

## 📂 backend/

### 📝 Archivos Raíz

| Archivo | Descripción |
| --- | --- |
| `.env` | Variables de entorno (credenciales, configuración). |
| `.gitignore` | Lo que NO debe subirse al repo (**pycache**, env, etc). |
| `README.md` | Documentación inicial del proyecto. |
| `requirements.txt` | Librerías necesarias. |
| `app.py` | Punto de entrada principal. Inicia Flask y registra las rutas. |

---

## 📂 config/

| Archivo | Descripción |
| --- | --- |
| `__init__.py` | Permite que sea un paquete de Python. |
| `settings.py` | Carga las variables de `.env` y define valores por defecto. Todo lo relacionado a **configuración central**. |
| `logging_config.py` | Define cómo se crean logs (archivo, consola, formato, nivel: DEBUG, INFO, ERROR, etc). |

---

## 📂 src/

---

### 📂 controllers/

> ❗Capa de controladores
> 
> 
> Aquí es donde se maneja **la lógica de "qué pasa cuando llega una request"**.
> 

| Archivo | Descripción |
| --- | --- |
| `account_controller.py` | Lógica para manejar cuentas (listar, crear, modificar). |
| `transaction_controller.py` | Maneja transacciones (alta, baja, listado, filtros). |
| `user_controller.py` | Maneja usuarios (login, registro, cambios de perfil). |

---

### 📂 database/

> ❗Conexión y acceso a la base de datos
> 
> 
> Esta capa **solo** maneja cómo te conectás a la base.
> 

| Archivo | Descripción |
| --- | --- |
| `db_mysql.py` | Conexión directa a MySQL (usa `pymysql` o `mysql-connector`). |
| `__init__.py` | Inicializa el paquete. Puede tener código común de conexión. |

---

### 📂 models/

> ❗Capa de modelos
> 
> 
> Define cómo son las entidades (User, Transaction, Account).
> 
> Los modelos incluyen:
> 
- **Definición de atributos**.
- **Funciones CRUD específicas (querys directas)**.

| Archivo | Descripción |
| --- | --- |
| `account_model.py` | Modelo de Cuenta (id, nombre, tipo, saldo). |
| `transaction_model.py` | Modelo de Transacción (monto, fecha, cuenta, categoría). |
| `user_model.py` | Modelo de Usuario (nombre, email, clave hash). |

---

### 📂 routes/

> ❗Capa de rutas
> 
> 
> Aquí es donde se define **la URL y el método HTTP**.
> 
> Por ejemplo:
> 
> `@app.route('/accounts', methods=['GET'])`
> 
> La ruta llama al **controller**, y el controller hace lo demás.
> 

| Archivo | Descripción |
| --- | --- |
| `account_routes.py` | Define rutas de cuentas. |
| `transaction_routes.py` | Define rutas de transacciones. |
| `user_routes.py` | Define rutas de usuarios. |

---

### 📂 services/

> ❗Capa de servicios
> 
> 
> Aquí va la lógica de negocio real, por ejemplo:
> 
- ¿Cómo calculás un saldo total?
- ¿Cómo predecís un gasto futuro?
- ¿Cómo generás un PDF o Excel?

| Archivo | Descripción |
| --- | --- |
| `account_service.py` | Procesa reglas sobre cuentas. |
| `transaction_service.py` | Procesa reglas sobre transacciones. |
| `user_service.py` | Maneja lógica de usuario (validar login, etc). |
| 📂 `predictions/` | Cosas de IA/predicciones. |
| 📂 `reports/` | Generadores de PDFs y Excel. |
| 📂 `integrations/` | Conexiones a APIs externas como WhatsApp. |

---

### 📂 tests/

> ❗Capa de tests
> 
> 
> Acá van tus pruebas unitarias e integrales.
> 

| Archivo | Descripción |
| --- | --- |
| `test_accounts.py` | Tests para cuentas. |
| `test_transactions.py` | Tests para transacciones. |
| `test_users.py` | Tests para usuarios. |

---

### 📂 utils/

> ❗Utilidades generales
> 
> 
> Funcionalidades de soporte que pueden ser usadas en todo el proyecto.
> 
> Ejemplos:
> 
- Validadores (emails, fechas).
- Funciones repetidas (formatear fechas, convertir monedas).
- Manejo de errores custom.

| Archivo | Descripción |
| --- | --- |
| `helpers.py` | Funciones generales y utilitarias. |
| `validators.py` | Validaciones (email válido, monto positivo, etc). |
| `exceptions.py` | Errores personalizados (UserNotFound, InvalidTransaction). |

---

### 📂 Integrations (ex whatsapp)

> ❗Conexiones a servicios externos
> 
> 
> Ahora está dentro de `services/integrations/`, y sirve para centralizar la interacción con:
> 
- WhatsApp.
- Bancos.
- Otras APIs.

| Archivo | Descripción |
| --- | --- |
| `whatsapp_api.py` | Manda y recibe mensajes desde WhatsApp. |
| `whatsapp_parser.py` | Analiza textos de comprobantes (leer montos, fechas). |



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

EJECUCION ######################
python app.py

Para probar la conexión
friqu@federico MINGW64 /d/Jarvis/finanzas/backend/src/database
$ python db_mysql.py
✅ Conexión exitosa a la base de datos
✅ Conexión cerrada

Ver la BD
friqu@federico MINGW64 /d/Jarvis/finanzas/backend
$ mysql -u root -p

git tree
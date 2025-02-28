# ====================================================================
# 💾 CONEXIÓN A BASE DE DATOS MYSQL
# ====================================================================

# ! Importamos librerías necesarias
import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv
import os

# ? Cargamos variables de entorno
load_dotenv()

# * Configuración de conexión
DB_CONFIG = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "database": os.getenv("DB_NAME"),
}

# * Función para crear la conexión
def get_db_connection():
    try:
        connection = mysql.connector.connect(**DB_CONFIG)
        if connection.is_connected():
            print("✅ Conexión exitosa a la base de datos")
            return connection
    except Error as e:
        print(f"❌ Error conectando a la base de datos: {e}")
        return None

# * Ejemplo de uso directo (para pruebas)
if __name__ == "__main__":
    conn = get_db_connection()
    if conn:
        conn.close()
        print("✅ Conexión cerrada")
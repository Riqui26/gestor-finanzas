# ! 🚀 Test CRUD Usuarios - Mejorado para Git Bash

from app import app
import pytest

# ? Configuración de cliente de pruebas
@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

# ! 📌 Datos de prueba
usuario_prueba = {
    "nombre": "Juan",
    "apellido": "Pérez",
    "email": "juan.perez@example.com",
    "password": "123456"
}

# * 🧪 Test Crear usuario
def test_crear_usuario(client):
    response = client.post('/api/users', json=usuario_prueba)
    assert response.status_code == 201
    
    data = response.get_json()
    assert 'creado' in data['message'].lower()
    assert 'id' in data

# * 🧪 Test Obtener todos los usuarios
def test_obtener_usuarios(client):
    response = client.get('/api/users')
    assert response.status_code == 200

    data = response.get_json()
    assert isinstance(data, list)
    assert len(data) > 0

# * 🧪 Test Obtener usuario por ID
def test_obtener_usuario_por_id(client):
    response_crear = client.post('/api/users', json=usuario_prueba)
    id_usuario = response_crear.get_json()['id']

    response = client.get(f'/api/users/{id_usuario}')
    assert response.status_code == 200

    data = response.get_json()
    assert data['email'] == usuario_prueba['email']

# * 🧪 Test Actualizar usuario
def test_actualizar_usuario(client):
    response_crear = client.post('/api/users', json=usuario_prueba)
    id_usuario = response_crear.get_json()['id']

    nuevo_dato = {
        "nombre": "Juan Modificado",
        "apellido": "Pérez Modificado",
        "email": "juan.modificado@example.com",
        "password": "654321"
    }

    response = client.put(f'/api/users/{id_usuario}', json=nuevo_dato)
    assert response.status_code == 200

    data = response.get_json()
    assert 'actualizado' in data['message'].lower()

    response_get = client.get(f'/api/users/{id_usuario}')
    data_get = response_get.get_json()
    assert data_get['nombre'] == "Juan Modificado"
    assert data_get['email'] == "juan.modificado@example.com"

# * 🧪 Test Eliminar usuario
def test_eliminar_usuario(client):
    response_crear = client.post('/api/users', json=usuario_prueba)
    id_usuario = response_crear.get_json()['id']

    response = client.delete(f'/api/users/{id_usuario}')
    assert response.status_code == 200

    data = response.get_json()
    assert 'eliminado' in data['message'].lower()

    response_get = client.get(f'/api/users/{id_usuario}')
    assert response_get.status_code == 404


# PYTHONPATH=./ pytest src/tests/test_users.py

//###################################################
// 🌐 Rutas de Usuarios
//###################################################

const express = require("express");
const router = express.Router();

// ? Importar el controlador de usuarios
const userController = require("../controllers/user.controller");

//###################################################
// 📍 Definir Endpoints de Usuarios
//###################################################

// * Obtener todos los usuarios
router.get("/", userController.getAllUsers);

// * Obtener un usuario por ID
router.get("/:id", userController.getUserById);

// * Crear un nuevo usuario
router.post("/", userController.createUser);

// * Actualizar un usuario por ID
router.put("/:id", userController.updateUser);

// * Eliminar un usuario por ID
router.delete("/:id", userController.deleteUser);

//###################################################
// 📤 Exportar Rutas
//###################################################
module.exports = router;

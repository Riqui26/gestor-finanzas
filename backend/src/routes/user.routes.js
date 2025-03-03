//###################################################
// 🌐 Rutas de Usuario
//###################################################

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/auth.middleware");
const { validateRegister, validateLogin } = require("../middlewares/validate.middleware");

// * Rutas públicas
router.post("/register", validateRegister, userController.registerUser); // ✅ Registrar usuario
router.post("/login", validateLogin, userController.loginUser); // ✅ Iniciar sesión

// * Rutas protegidas
router.get("/", verifyToken, userController.getUsers); // ✅ Obtener usuarios
router.delete("/:id", verifyToken, userController.deleteUser); // ✅ Eliminar usuario

module.exports = router;
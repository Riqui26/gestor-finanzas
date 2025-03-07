//###################################################
// 🌐 Rutas de Autenticación
//###################################################

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// * Iniciar sesión
router.post("/login", authController.login);

module.exports = router;

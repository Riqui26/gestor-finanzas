//###################################################
// 🔑 Rutas de Autenticación
//###################################################

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// * Login de usuario
router.post("/login", authController.login);

module.exports = router;

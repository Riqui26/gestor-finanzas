//###################################################
// 🪪🌐 Rutas de Cuentas Bancarias
//###################################################

const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
const authMiddleware = require("../middlewares/authMiddleware");

// * Crear una nueva cuenta
router.post("/", authMiddleware, accountController.createAccount);

// ? Obtener todas las cuentas del usuario autenticado
router.get("/", authMiddleware, accountController.getAccounts);

// ? Obtener una cuenta por ID
router.get("/:id", authMiddleware, accountController.getAccountById);

// ? Actualizar saldo o información de la cuenta
router.put("/:id", authMiddleware, accountController.updateAccount);

// ! Eliminar una cuenta
router.delete("/:id", authMiddleware, accountController.deleteAccount);

module.exports = router;

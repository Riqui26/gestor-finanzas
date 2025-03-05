//###################################################
// 🪪🌐 Rutas de Cuentas Bancarias
//###################################################

const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");

// * Crear una nueva cuenta
router.post("/", accountController.createAccount);

// ? Obtener todas las cuentas de un usuario
router.get("/user/:userId", accountController.getAccounts);

// ? Obtener una cuenta por ID
router.get("/:id", accountController.getAccountById);

// ? Actualizar saldo o información de la cuenta
router.put("/:id", accountController.updateAccount);

// ! Eliminar una cuenta
router.delete("/:id", accountController.deleteAccount);

module.exports = router;

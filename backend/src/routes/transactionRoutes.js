//###################################################
// 💵🌐 - Rutas de Transacciones
//###################################################

const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

// * Crear una nueva transacción
router.post("/", transactionController.createTransaction);

// ? Obtener todas las transacciones de un usuario
router.get("/user/:userId", transactionController.getTransactions);

// ? Obtener todas las transacciones de una cuenta específica
router.get("/account/:accountId", transactionController.getTransactionsByAccount);


module.exports = router;

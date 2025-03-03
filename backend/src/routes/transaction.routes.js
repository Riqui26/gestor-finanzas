//###################################################
// 🌐 Rutas de Transaccion
//###################################################
const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaction.controller");
const { verifyToken } = require("../middlewares/auth.middleware");

//* ✅ Obtener todas las transacciones (protegida)
router.get("/", verifyToken, transactionController.getTransactions);

//* ✅ Crear una transacción (protegida)
router.post("/", verifyToken, transactionController.createTransaction);

//* ✅ Obtener una transacción específica (protegida)
router.get("/:id", verifyToken, transactionController.getTransactionById);

//* ✅ Actualizar una transacción (protegida)
router.put("/:id", verifyToken, transactionController.updateTransaction);

//* ✅ Eliminar una transacción (protegida)
router.delete("/:id", verifyToken, transactionController.deleteTransaction);

module.exports = router;

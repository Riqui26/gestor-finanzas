//###################################################
// 🌐 Rutas de Cuenta
//###################################################
const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account.controller");
const { verifyToken } = require("../middlewares/auth.middleware");

//* ✅ Obtener todas las cuentas (protegida)
router.get("/", verifyToken, accountController.getAccounts);

//* ✅ Crear una cuenta (protegida)
router.post("/", verifyToken, accountController.createAccount);

//* ✅ Obtener una cuenta específica (protegida)
router.get("/:id", verifyToken, accountController.getAccountById);

//* ✅ Actualizar una cuenta (protegida)
router.put("/:id", verifyToken, accountController.updateAccount);

//* ✅ Eliminar una cuenta (protegida)
router.delete("/:id", verifyToken, accountController.deleteAccount);

module.exports = router;

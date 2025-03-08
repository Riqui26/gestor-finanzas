//###################################################
// ⚠️🌐 Rutas de Alertas Financieras
//###################################################

const express = require("express");
const router = express.Router();
const alertController = require("../controllers/alertController");
const authMiddleware = require("../middlewares/authMiddleware");

// * Crear una nueva alerta (usuario autenticado)
router.post("/", authMiddleware, alertController.createAlert);

// ? Obtener todas las alertas del usuario autenticado
router.get("/user/:userId", authMiddleware, alertController.getAlerts);

// ? Actualizar una alerta (solo usuario autenticado)
router.put("/:id", authMiddleware, alertController.updateAlert);

// ! Eliminar una alerta (solo usuario autenticado)
router.delete("/:id", authMiddleware, alertController.deleteAlert);

module.exports = router;


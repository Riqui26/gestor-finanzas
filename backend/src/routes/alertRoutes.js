//###################################################
// ⚠️🌐 Rutas de Alertas Financieras
//###################################################

const express = require("express");
const router = express.Router();
const alertController = require("../controllers/alertController");

// * Crear una nueva alerta
router.post("/", alertController.createAlert);

// ? Obtener todas las alertas de un usuario
router.get("/user/:userId", alertController.getAlerts);

// ? Actualizar una alerta (mensaje, tipo, etc.)
router.put("/:id", alertController.updateAlert);

// ! Eliminar una alerta
router.delete("/:id", alertController.deleteAlert);

module.exports = router;

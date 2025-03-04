//###################################################
// 🌐 Rutas de Alertas
//###################################################
const express = require("express");
const router = express.Router();
const alertController = require("../controllers/alert.controller");
const auth = require("../middlewares/auth.middleware");

// 🔐 Todas protegidas con autenticación
router.get("/", auth, alertController.getAlerts);
router.post("/", auth, alertController.createAlert);
router.put("/:id/read", auth, alertController.markAlertAsRead);
router.delete("/:id", auth, alertController.deleteAlert);

module.exports = router;

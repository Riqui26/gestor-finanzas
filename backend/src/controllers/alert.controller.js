//###################################################
// ⚠️ Controlador de Alertas
//###################################################
const Alert = require("../models/alert.model");

// ✅ Obtener todas las alertas de un usuario
exports.getAlerts = async (req, res) => {
  const alerts = await Alert.find({ user: req.user.id }).sort({ date: -1 });
  res.json(alerts);
};

// ✅ Crear una nueva alerta
exports.createAlert = async (req, res) => {
  const newAlert = new Alert({ ...req.body, user: req.user.id });
  await newAlert.save();
  res.status(201).json(newAlert);
};

// ✅ Marcar alerta como leída
exports.markAlertAsRead = async (req, res) => {
  await Alert.findByIdAndUpdate(req.params.id, { read: true });
  res.json({ msg: "✅ Alerta marcada como leída" });
};

// ✅ Eliminar alerta
exports.deleteAlert = async (req, res) => {
  await Alert.findByIdAndDelete(req.params.id);
  res.json({ msg: "🗑️ Alerta eliminada" });
};

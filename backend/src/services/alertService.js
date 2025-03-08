//###################################################
// ⚠️ Servicio de Alertas
//###################################################

const Alert = require("../models/Alert");

// ? Crear una nueva alerta
const createAlert = async (alertData) => {
  const newAlert = new Alert(alertData);
  return await newAlert.save();
};

// ? Obtener todas las alertas
const getUserAlerts = async (userId) => {
  return await Alert.find({ user: userId }).sort({ date: -1 });
};

// ? Eliminar una alerta por ID
const deleteAlert = async (alertId) => {
  return await Alert.findByIdAndDelete(alertId);
};

// ? Actualizar una alerta
const updateAlert = async (alertId, updateData) => {
  return await Alert.findByIdAndUpdate(alertId, updateData, { new: true });
};

module.exports = { getUserAlerts, createAlert, deleteAlert, updateAlert };

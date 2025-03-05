//###################################################
// ⚠️ Servicio de Alertas
//###################################################

const Alert = require("../models/Alert");

// ? Obtener todas las alertas
const getAlerts = async () => {
  return await Alert.find();
};

// ? Crear una nueva alerta
const createAlert = async (alertData) => {
  const newAlert = new Alert(alertData);
  return await newAlert.save();
};

// ? Eliminar una alerta por ID
const deleteAlert = async (alertId) => {
  return await Alert.findByIdAndDelete(alertId);
};

// ? Actualizar una alerta
const updateAlert = async (alertId, updateData) => {
  return await Alert.findByIdAndUpdate(alertId, updateData, { new: true });
};

module.exports = { getAlerts, createAlert, deleteAlert, updateAlert };

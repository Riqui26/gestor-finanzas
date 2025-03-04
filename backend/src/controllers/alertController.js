//###################################################
// ⚠️ Controlador de Alertas
//###################################################

const alertService = require("../services/alertService");

// ! Obtener alertas de un usuario
const getAlerts = async (req, res) => {
  try {
    const alerts = await alertService.getUserAlerts(req.user.id);
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo alertas." });
  }
};

// ! Crear una nueva alerta
const createAlert = async (req, res) => {
  try {
    const alert = await alertService.createAlert(req.body, req.user.id);
    res.status(201).json(alert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ! Eliminar una alerta por ID
const deleteAlert = async (req, res) => {
  try {
    const alertId = req.params.id;
    await alertService.deleteAlert(alertId);
    res.status(200).json({ message: "Alerta eliminada correctamente." });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando la alerta." });
  }
};

// ! Actualizar una alerta
const updateAlert = async (req, res) => {
  try {
      const updatedAlert = await alertService.updateAlert(req.params.id, req.body);
      if (!updatedAlert) {
          return res.status(404).json({ message: "Alerta no encontrada" });
      }
      res.json(updatedAlert);
  } catch (error) {
      res.status(500).json({ message: "Error al actualizar la alerta" });
  }
};

module.exports = { getAlerts, createAlert, deleteAlert, updateAlert };

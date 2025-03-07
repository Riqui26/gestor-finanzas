//###################################################
// 🏆 Servicio de Objetivos de Ahorro
//###################################################

const goalService = require("../services/goalService");

// ! Crear un nuevo objetivo de ahorro
const createGoal = async (req, res) => {
  try {
    const goal = await goalService.createGoal(req.body, req.user.id);
    res.status(201).json(goal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ! Obtener los objetivos de un usuario
const getGoals = async (req, res) => {
  try {
    const goals = await goalService.getUserGoals(req.user.id);
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo objetivos." });
  }
};

// ! Actualizar un objetivo
const updateGoal = async (req, res) => {
  try {
      const updatedGoal = await goalService.updateGoal(req.params.id, req.body);
      if (!updatedGoal) {
          return res.status(404).json({ message: "Objetivo no encontrado" });
      }
      res.json(updatedGoal);
  } catch (error) {
      res.status(500).json({ message: "Error al actualizar el objetivo" });
  }
};

// ! Eliminar un objetivo por ID
const deleteGoal = async (req, res) => {
  try {
    const goalId = req.params.id;
    await goalService.deleteGoal(goalId);
    res.status(200).json({ message: "Objetivo eliminado correctamente." });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando el objetivo." });
  }
};

module.exports = { getGoals, createGoal, deleteGoal, updateGoal };
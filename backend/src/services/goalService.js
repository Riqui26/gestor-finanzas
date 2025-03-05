//###################################################
// 🏆 Controlador de Objetivos de Ahorro
//###################################################

const Goal = require("../models/Goal");

// ? Obtener todos los objetivos
const getGoals = async () => {
  return await Goal.find();
};

// ? Crear un nuevo objetivo
const createGoal = async (goalData) => {
  const newGoal = new Goal(goalData);
  return await newGoal.save();
};

// ? Eliminar un objetivo por ID
const deleteGoal = async (goalId) => {
  return await Goal.findByIdAndDelete(goalId);
};

// ? Actualizar un objetivo
const updateGoal = async (goalId, updateData) => {
  return await Goal.findByIdAndUpdate(goalId, updateData, { new: true });
};

module.exports = { getGoals, createGoal, deleteGoal, updateGoal };

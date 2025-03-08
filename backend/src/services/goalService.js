//###################################################
// 🏆 Controlador de Objetivos de Ahorro
//###################################################

const Goal = require("../models/Goal");

// ? Obtener todos los objetivos de un usuario
const getUserGoals = async (userId) => {
  return await Goal.find({ user: userId }); // ✅ Filtrar por usuario
};

// ? Crear un nuevo objetivo
const createGoal = async (goalData, userId) => {
  const newGoal = new Goal({ ...goalData, user: userId }); // ✅ Asignar usuario correctamente
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

module.exports = { getUserGoals, createGoal, deleteGoal, updateGoal };

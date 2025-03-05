//###################################################
// 🏆🌐 Rutas de Objetivos de Ahorro
//###################################################

const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");

// * Crear un nuevo objetivo de ahorro
router.post("/", goalController.createGoal);

// ? Obtener todos los objetivos de un usuario
router.get("/user/:userId", goalController.getGoals);

// ? Actualizar un objetivo (nombre, monto, progreso, etc.)
router.put("/:id", goalController.updateGoal);

// ! Eliminar un objetivo
router.delete("/:id", goalController.deleteGoal);

module.exports = router;

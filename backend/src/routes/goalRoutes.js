//###################################################
// 🏆🌐 Rutas de Objetivos de Ahorro
//###################################################

const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");
const authMiddleware = require("../middlewares/authMiddleware");

// * Crear un nuevo objetivo de ahorro
router.post("/", authMiddleware, goalController.createGoal);

// ? Obtener todos los objetivos de un usuario
router.get("/user/:userId", authMiddleware, goalController.getGoals);

// ? Actualizar un objetivo (nombre, monto, progreso, etc.)
router.put("/:id", authMiddleware, goalController.updateGoal);

// ! Eliminar un objetivo
router.delete("/:id", authMiddleware, goalController.deleteGoal);

module.exports = router;

//###################################################
// 📲 Middleware de Validación de Datos
//###################################################

const { validationResult } = require("express-validator");

// ! Middleware para validar los datos antes de procesarlos
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = validateRequest;

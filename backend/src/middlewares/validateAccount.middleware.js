//###################################################
// ✅ Middleware de Validación con Joi para Cuentas
//###################################################

const Joi = require("joi");

// 🎯 Esquema de Validación para Crear una Cuenta
const accountSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(), // 🏷️ Nombre requerido (3-50 caracteres)
  balance: Joi.number().min(0).default(0), // 💰 Balance mínimo 0
  currency: Joi.string().valid("ARS", "USD", "BTC").default("ARS"), // 💱 Moneda válida
  type: Joi.string().valid("Ahorro", "Corriente", "Inversion").required(), // 🏦 Tipo de cuenta requerido
  owner: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(), // 👤 ID de usuario (MongoDB ObjectId)
});

// 🎯 Middleware para Validar Cuentas en la Creación
module.exports = (req, res, next) => {
  const { error } = accountSchema.validate(req.body, { abortEarly: false });

  // 🚨 Si hay errores, devolver mensaje detallado
  if (error) {
    return res.status(400).json({
      error: error.details.map((detail) => detail.message),
    });
  }

  // ✅ Si todo está bien, continuar
  next();
};

//###################################################
// ✅ Middleware de Validación de Transacción
//###################################################

const Joi = require("joi");

// ? Validador para crear transacción
exports.validateCreateTransaction = (req, res, next) => {
    const schema = Joi.object({
        account: Joi.string().required(),                // * ID de la cuenta asociada
        amount: Joi.number().required(),                  // * Monto
        type: Joi.string().valid("INGRESO", "EGRESO").required(), // * Tipo de transacción
        category: Joi.string().min(3).required(),        // * Categoría de la transacción
        description: Joi.string().allow("").optional(),   // * Descripción opcional
        currency: Joi.string().valid("ARS", "USD", "BTC").required(), // * Moneda
        date: Joi.date().required(),                      // * Fecha de la transacción
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

    next();
};

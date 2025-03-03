//###################################################
// ✅ Middleware de Validación (validate.middleware.js)
//###################################################

const Joi = require("joi"); // ! 📦 Librería para validación de esquemas

//***************************************************
// 📋 Validador para el registro de usuario
//***************************************************
exports.validateRegister = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required().messages({
            "string.empty": "⚠️ El nombre es obligatorio.",
            "string.min": "⚠️ El nombre debe tener al menos 3 caracteres."
        }),

        email: Joi.string().email().required().messages({
            "string.empty": "⚠️ El email es obligatorio.",
            "string.email": "⚠️ El email no tiene un formato válido."
        }),

        password: Joi.string().min(6).required().messages({
            "string.empty": "⚠️ La contraseña es obligatoria.",
            "string.min": "⚠️ La contraseña debe tener al menos 6 caracteres."
        })
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            msg: error.details[0].message
        });
    }

    next(); // ✅ Si pasa la validación, continúa al controlador
};

//***************************************************
// 📋 Validador para el login de usuario
//***************************************************
exports.validateLogin = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            "string.empty": "⚠️ El email es obligatorio.",
            "string.email": "⚠️ El email no tiene un formato válido."
        }),

        password: Joi.string().min(6).required().messages({
            "string.empty": "⚠️ La contraseña es obligatoria.",
            "string.min": "⚠️ La contraseña debe tener al menos 6 caracteres."
        })
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            msg: error.details[0].message
        });
    }

    next(); // ✅ Si pasa la validación, continúa al controlador
};

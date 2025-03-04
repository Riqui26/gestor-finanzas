//###################################################
// ✅ Middleware de Validación de Cuenta
//###################################################
exports.validatePromotion = (req, res, next) => {
    const { title, discount, expirationDate } = req.body;
  
    // ⚠️ Validar campos obligatorios
    if (!title || !discount || !expirationDate) {
      return res.status(400).json({ msg: "⚠️ Título, descuento y fecha de expiración son obligatorios" });
    }
    next();
  };
  
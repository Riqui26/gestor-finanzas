//###################################################
// 🔐 Middleware de Autenticación
//###################################################

const jwt = require("jsonwebtoken");
require("dotenv").config();

// ? Verifica si el usuario está autenticado
exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "Acceso denegado. No hay token." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ msg: "Token inválido." });
  }
};

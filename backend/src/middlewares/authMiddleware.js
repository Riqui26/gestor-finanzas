//###################################################
// 📋 Middleware de Autenticación
//###################################################

const jwt = require("jsonwebtoken");
require("dotenv").config();

// ! Middleware para verificar si el usuario está autenticado
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Acceso denegado. No hay token." });
  }

  try {
    // * Verifica el token con la clave secreta
    const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = verified; // Guarda la info del usuario en la request
    next();
  } catch (error) {
    return res.status(400).json({ message: "Token inválido." });
  }
};

module.exports = verifyToken;

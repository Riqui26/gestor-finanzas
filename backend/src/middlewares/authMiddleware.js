//###################################################
// 🔐 Middleware de Autenticación
//###################################################

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1]; 
    if (!token) return res.status(401).json({ message: "Acceso denegado. Token no proporcionado." });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password"); 

    if (!req.user) return res.status(401).json({ message: "Usuario no encontrado." });

    next();
  } catch (error) {
    res.status(401).json({ message: "Token inválido." });
  }
};

module.exports = authMiddleware;
//###################################################
// 🔑 Servicio de Autenticación
//###################################################

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// ? Iniciar sesión
const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Usuario no encontrado.");

  // 🔐 Comparar contraseñas
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Contraseña incorrecta.");

  // 🔑 Generar token JWT
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

  return { user, token };
};

module.exports = { login };

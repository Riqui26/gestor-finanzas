//###################################################
// 🔑 Controlador de Autenticación
//###################################################

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔍 Buscar usuario en la base de datos
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Usuario no encontrado." });

    // 🔐 Comparar contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta." });

    // 🔑 Generar token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión." });
  }
};

module.exports = { login };

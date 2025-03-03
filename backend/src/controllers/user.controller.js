//###################################################
// 🎮 Controlador de Usuarios
//###################################################

const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// ! Registro de usuario con Autologin
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ? Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: "El usuario ya existe" });

    // * Crear nuevo usuario
    const newUser = new User({ name, email, password });
    await newUser.save();

    // ? Generar Token JWT automáticamente al registrarse (Autologin)
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      msg: "Usuario registrado exitosamente",
      token, // ✅ Token devuelto directo
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
    });

  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

// ! Inicio de sesión
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ? Buscar usuario por email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Usuario no encontrado" });

    // * Comparar contraseñas
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Contraseña incorrecta" });

    // ? Generar Token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

// ! Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // * Excluye la contraseña
    res.json(users);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

// ! Eliminar un usuario
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

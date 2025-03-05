//###################################################
// 🧑‍💻 Servicio de Usuario
//###################################################

const User = require("../models/User");

// ? Obtener todos los usuarios
const getUsers = async () => {
  return await User.find();
};

// ? Crear un nuevo usuario
const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

// ? Eliminar un usuario por ID
const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

module.exports = { getUsers, createUser, deleteUser };

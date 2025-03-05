//###################################################
// 🧑‍💻 Controlador de Usuarios
//###################################################

const userService = require("../services/userService");

// ! Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo los usuarios." });
  }
};

// ! Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ! Eliminar un usuario por ID
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await userService.deleteUser(userId);
    res.status(200).json({ message: "Usuario eliminado correctamente." });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando el usuario." });
  }
};

// 
// Obtener un usuario por ID (si querés agregarlo después)
//  const getUserById = async (req, res) => {
//    res.status(501).json({ message: "Endpoint no implementado aún." });
//  };

// Actualizar un usuario por ID (si querés agregarlo después)
//  const updateUser = async (req, res) => {
//    res.status(501).json({ message: "Endpoint no implementado aún." });
//  };


module.exports = { getUsers, createUser, deleteUser };  //  getUserById, updateUser

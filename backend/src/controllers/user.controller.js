//###################################################
// 👤 Controlador de Usuarios
//###################################################

const User = require("../models/user.model"); // ! Importa el modelo de usuario

// * Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

// * Obtener un usuario por ID
const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

// * Crear un nuevo usuario
const createUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
};

// * Actualizar un usuario
const updateUser = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
};

// * Eliminar un usuario
const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
};

//###################################################
// 📤 Exportar funciones del controlador
//###################################################
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
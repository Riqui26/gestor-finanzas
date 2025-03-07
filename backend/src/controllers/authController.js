//###################################################
// 🔑 Controlador de Autenticación
//###################################################

const authService = require("../services/authService");

// ! Iniciar sesión
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login(email, password);
    
    res.json({ user, token }); // 🔥 Devuelve usuario y token
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { login };

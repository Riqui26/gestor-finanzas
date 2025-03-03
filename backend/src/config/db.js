//###################################################
// 🔧 Configuración de MongoDB
//###################################################

// ! Conexión a MongoDB
const mongoose = require("mongoose");
require("dotenv").config(); // Carga las variables de entorno desde .env

// ? Conexión a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Conexión sin opciones obsoletas
    console.log("✅ MongoDB conectado");
  } catch (error) {
    console.error("❌ Error al conectar MongoDB:", error);
    process.exit(1); // Termina el proceso en caso de error
  }
};

module.exports = connectDB;

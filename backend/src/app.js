//###################################################
// 🚀 Configuración principal de Express
//###################################################

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

// ? Importar rutas principales del sistema
const userRoutes = require("./routes/user.routes");
const accountRoutes = require("./routes/account.routes");
const transactionRoutes = require("./routes/transaction.routes");

// ? Inicializar app
const app = express();

// ! Conectar a la base de datos
connectDB();

// * Middlewares
app.use(express.json()); // ! 🛡️ Habilitar el uso de JSON en Express (solicitudes)
app.use(cors()); // ! 🔄 Habilitar CORS desde cualquier origen
app.use(morgan("dev")); // ! 📜 Habilitar el registro de solicitudes HTTP

// ? Definir las rutas de la API
app.use("/api/users", userRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/transactions", transactionRoutes);

// ✅ Ruta raíz para verificar que el servidor está corriendo
app.get("/", (req, res) => {
    res.send("✅ Backend de Gestor Finanzas funcionando correctamente.");
});

// ? Exportar app para usarlo en server.js
module.exports = app;

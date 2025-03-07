//###################################################
// 🌎 Inicia el servidor y maneja las solicitudes.
//###################################################

// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Importar rutas
const userRoutes = require('./routes/userRoutes');
const alertRoutes = require('./routes/alertRoutes');
const accountRoutes = require('./routes/accountRoutes');
const goalRoutes = require('./routes/goalRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const authRoutes = require("./routes/authRoutes");

// Configurar dotenv para las variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Usar middleware
app.use(express.json());  // Para parsear el cuerpo de las solicitudes en formato JSON
app.use(cors());          // Habilitar CORS para permitir solicitudes de diferentes dominios

// Conectar a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a la base de datos MongoDB"))
  .catch((error) => console.error("Error al conectar con MongoDB", error));

// Usar las rutas
app.use('/api/users', userRoutes);          // Rutas de usuarios
app.use('/api/accounts', accountRoutes);    // Rutas de cuentas
app.use('/api/alerts', alertRoutes);        // Rutas de alertas
app.use('/api/goals', goalRoutes);          // Rutas de objetivos
app.use('/api/transactions', transactionRoutes);  // Rutas de transacciones
app.use("/api/auth", authRoutes); // Rutas de autenticación

// Ruta de inicio (opcional, puedes personalizarla)
app.get('/', (req, res) => {
  res.send('🏛️ Bienvenido al gestor de finanzas personales! 💲');
});

// Puerto del servidor
const PORT = process.env.PORT || 5000;

// * Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

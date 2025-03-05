//###################################################
// * Configuración de la base de datos MongoDB
//###################################################

const mongoose = require('mongoose');
require('dotenv').config();

// * Función para conectar con MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('✅ Conectado a MongoDB');
    } catch (error) {
        console.error('❌ Error conectando a MongoDB:', error.message);
        process.exit(1); // ! Salir del proceso en caso de error
    }
};

module.exports = connectDB;

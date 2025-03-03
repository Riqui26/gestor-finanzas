//###################################################
// 🚀 Punto de entrada de la aplicación
//###################################################

require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

// ? Este archivo se encarga de arrancar la aplicación en el puerto configurado.
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

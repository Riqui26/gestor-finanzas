//###################################################
// ⚠️ Modelo de Alertas
//###################################################
const mongoose = require("mongoose");

// 💾 Esquema de Alerta
const alertSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  // 📌 Relación con Usuario
  message: { type: String, required: true },  // 📩 Mensaje de la alerta
  type: { type: String, enum: ["recordatorio", "pago", "promocion"], required: true },  // 🔖 Tipo de alerta
  date: { type: Date, default: Date.now },  // 📆 Fecha de creación
  read: { type: Boolean, default: false }  // ✅ Leída o no
});

// 📤 Exportar modelo
module.exports = mongoose.model("Alert", alertSchema);

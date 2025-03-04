//###################################################
// 📄 Modelo de Promociones
//###################################################
const mongoose = require("mongoose");

// 💾 Esquema de Promoción
const promotionSchema = new mongoose.Schema({
  title: { type: String, required: true },  // 🏷️ Título
  description: { type: String },  // 📝 Descripción
  discount: { type: Number, required: true },  // 💰 Descuento %
  bank: { type: String },  // 🏦 Banco
  paymentMethod: { type: String },  // 💳 Método de Pago
  expirationDate: { type: Date, required: true },  // ⏳ Fecha de Vencimiento
  createdAt: { type: Date, default: Date.now }  // 📅 Fecha de Creación
});

// 📤 Exportar modelo
module.exports = mongoose.model("Promotion", promotionSchema);

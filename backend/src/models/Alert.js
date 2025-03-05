//###################################################
// ⚠️ Modelo de Alertas Financieras
//###################################################

const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["payment_due", "low_balance"], required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Alert", alertSchema);

//###################################################
// 💰 Modelo de Cuentas
//###################################################
const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    balance: { type: Number, default: 0 },
    currency: { type: String, enum: ["ARS", "USD", "BTC"], default: "ARS" },
    type: { type: String, enum: ["Ahorro", "Corriente", "Inversion"], required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", accountSchema);

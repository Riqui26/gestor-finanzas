//###################################################
// 🪪 Modelo de Cuenta Bancaria
//###################################################

const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ["bank", "wallet"], required: true },
  balance: { type: Number, default: 0 },
  currency: { type: String, enum: ["ARS", "USD"], required: true },
}, { timestamps: true });

module.exports = mongoose.model("Account", accountSchema);

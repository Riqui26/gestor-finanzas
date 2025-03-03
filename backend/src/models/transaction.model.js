//###################################################
// 💸 Modelo de Transacciones
//###################################################
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    currency: { type: String, enum: ["ARS", "USD", "BTC"], default: "ARS" },
    account: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    type: { type: String, enum: ["ingreso", "egreso"], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);

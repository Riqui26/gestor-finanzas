//###################################################
// 🧑‍💻 Modelo de Usuario
//###################################################

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Account" }],
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

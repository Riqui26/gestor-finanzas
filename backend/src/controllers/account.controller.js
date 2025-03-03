//###################################################
// 💰 Controlador de Cuentas
//###################################################
const Account = require("../models/account.model");

//* ✅ Obtener todas las cuentas
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ user: req.user.id });
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

//* ✅ Crear cuenta
exports.createAccount = async (req, res) => {
  try {
    const newAccount = new Account({ ...req.body, user: req.user.id });
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

//* ✅ Obtener cuenta por ID
exports.getAccountById = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    res.json(account);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

//* ✅ Actualizar cuenta
exports.updateAccount = async (req, res) => {
  try {
    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAccount);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

//* ✅ Eliminar cuenta
exports.deleteAccount = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);
    res.json({ msg: "Cuenta eliminada" });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

//###################################################
// 💳 Controlador de Cuentas
//###################################################

const Account = require("../models/account.model"); // ✅ Importar el modelo

// * Obtener todas las cuentas
const getAccounts = async (req, res, next) => {
  try {
    const accounts = await Account.find({ owner: req.user.id });
    res.json(accounts);
  } catch (error) {
    next(error); // ✅ Enviar error al middleware de errores
  }
};

// * Crear una nueva cuenta
const createAccount = async (req, res, next) => {
  try {
    const { name, type, currency } = req.body;
    const newAccount = new Account({ name, type, currency, owner: req.user.id });
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {
    next(error);
  }
};

// * Obtener una cuenta por ID
const getAccountById = async (req, res, next) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) return res.status(404).json({ error: "Cuenta no encontrada" });
    res.json(account);
  } catch (error) {
    next(error);
  }
};

// * Actualizar una cuenta
const updateAccount = async (req, res, next) => {
  try {
    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAccount) return res.status(404).json({ error: "Cuenta no encontrada" });
    res.json(updatedAccount);
  } catch (error) {
    next(error);
  }
};

// * Eliminar una cuenta
const deleteAccount = async (req, res, next) => {
  try {
    const deletedAccount = await Account.findByIdAndDelete(req.params.id);
    if (!deletedAccount) return res.status(404).json({ error: "Cuenta no encontrada" });
    res.json({ message: "Cuenta eliminada correctamente" });
  } catch (error) {
    next(error);
  }
};

// ✅ Exportar controladores
module.exports = {
  getAccounts,
  createAccount,
  getAccountById,
  updateAccount,
  deleteAccount,
};

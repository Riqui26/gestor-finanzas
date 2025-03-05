//###################################################
// 🏛️ Servicio de Cuentas
//###################################################

const Account = require("../models/Account");

// ? Obtener todas las cuentas
const getAccounts = async () => {
  return await Account.find();
};

// ? Crear una nueva cuenta
const createAccount = async (accountData) => {
  const newAccount = new Account(accountData);
  return await newAccount.save();
};

// ? Eliminar una cuenta por ID
const deleteAccount = async (accountId) => {
  return await Account.findByIdAndDelete(accountId);
};

// ? Obtener una cuenta por ID
const getAccountById = async (accountId) => {
  return await Account.findById(accountId);
};

// ? Actualizar saldo o información de la cuenta
const updateAccount = async (accountId, updateData) => {
  return await Account.findByIdAndUpdate(accountId, updateData, { new: true });
};

module.exports = { getAccounts, createAccount, deleteAccount, getAccountById, updateAccount };

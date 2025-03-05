//###################################################
// 💸 Servicio de Transacciones
//###################################################

const Transaction = require("../models/Transaction");

// Obtener todas las transacciones
const getTransactions = async () => {
  try {
    const transactions = await Transaction.find();
    return transactions;
  } catch (error) {
    throw new Error("Error obteniendo las transacciones.");
  }
};

// Crear una nueva transacción
const createTransaction = async (transactionData) => {
  try {
    const newTransaction = new Transaction(transactionData);
    await newTransaction.save();
    return newTransaction;
  } catch (error) {
    throw new Error("Error creando la transacción.");
  }
};

// ? Obtener transacciones por ID de cuenta
const getTransactionsByAccount = async (accountId) => {
  return await Transaction.find({ account: accountId });
};

module.exports = { getTransactions, createTransaction, getTransactionsByAccount };
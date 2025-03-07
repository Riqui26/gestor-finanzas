//###################################################
// 💸 Controlador de Transacciones
//###################################################

const transactionService = require("../services/transactionService");

// ! Crear una nueva transacción
const createTransaction = async (req, res) => {
  try {
    const transaction = await transactionService.createTransaction(req.body, req.user.id);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ! Obtener todas las transacciones de un usuario
const getTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getUserTransactions(req.user.id);
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo transacciones." });
  }
};

// ! Obtener todas las transacciones de una cuenta específica
const getTransactionsByAccount = async (req, res) => {
  try {
      const transactions = await transactionService.getTransactionsByAccount(req.params.accountId);
      res.json(transactions);
  } catch (error) {
      res.status(500).json({ message: "Error al obtener transacciones de la cuenta" });
  }
};

module.exports = { getTransactions, createTransaction, getTransactionsByAccount };

//###################################################
// 💸 Controlador de Transacciones
//###################################################
const Transaction = require("../models/transaction.model");

//* ✅ Obtener todas las transacciones
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

//* ✅ Crear transacción
exports.createTransaction = async (req, res) => {
  try {
    const newTransaction = new Transaction({ ...req.body, user: req.user.id });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

//* ✅ Obtener transacción por ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

//* ✅ Actualizar transacción
exports.updateTransaction = async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

//* ✅ Eliminar transacción
exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ msg: "Transacción eliminada" });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

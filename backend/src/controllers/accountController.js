//###################################################
// 🪪 Controlador de Cuentas
//###################################################

const accountService = require("../services/accountService");

// ! Obtener todas las cuentas de un usuario
const getAccounts = async (req, res) => {
  try {
    const accounts = await accountService.getUserAccounts(req.user.id);
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo las cuentas." });
  }
};

// ! Crear una nueva cuenta
const createAccount = async (req, res) => {
  try {
    const account = await accountService.createAccount(req.body, req.user.id);
    res.status(201).json(account);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ! Eliminar una cuenta por ID
const deleteAccount = async (req, res) => {
  try {
    const accountId = req.params.id;
    await accountService.deleteAccount(accountId);
    res.status(200).json({ message: "Cuenta eliminada correctamente." });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando la cuenta." });
  }
};

// ! Obtener una cuenta por ID
const getAccountById = async (req, res) => {
  try {
      const account = await accountService.getAccountById(req.params.id);
      if (!account) {
          return res.status(404).json({ message: "Cuenta no encontrada" });
      }
      res.json(account);
  } catch (error) {
      res.status(500).json({ message: "Error al obtener la cuenta" });
  }
};

// ! Actualizar saldo o información de la cuenta
const updateAccount = async (req, res) => {
  try {
      const updatedAccount = await accountService.updateAccount(req.params.id, req.body);
      if (!updatedAccount) {
          return res.status(404).json({ message: "Cuenta no encontrada" });
      }
      res.json(updatedAccount);
  } catch (error) {
      res.status(500).json({ message: "Error al actualizar la cuenta" });
  }
};

module.exports = { getAccounts, createAccount, deleteAccount, getAccountById, updateAccount };

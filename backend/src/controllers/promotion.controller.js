//###################################################
// 🎮 Controlador de Promociones
//###################################################

const Promotion = require("../models/promotion.model");

// ✅ Obtener todas las promociones
exports.getPromotions = async (req, res) => {
  const promotions = await Promotion.find().sort({ expirationDate: 1 });
  res.json(promotions);
};

// ✅ Crear nueva promoción
exports.createPromotion = async (req, res) => {
  const newPromotion = new Promotion(req.body);
  await newPromotion.save();
  res.status(201).json(newPromotion);
};

// ✅ Obtener promoción por ID
exports.getPromotionById = async (req, res) => {
  const promotion = await Promotion.findById(req.params.id);
  res.json(promotion);
};

// ✅ Actualizar promoción
exports.updatePromotion = async (req, res) => {
  const updatedPromotion = await Promotion.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPromotion);
};

// ✅ Eliminar promoción
exports.deletePromotion = async (req, res) => {
  await Promotion.findByIdAndDelete(req.params.id);
  res.json({ msg: "🗑️ Promoción eliminada" });
};

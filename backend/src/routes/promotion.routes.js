//###################################################
// 🌐 Rutas de Promociones
//###################################################
const express = require("express");
const router = express.Router();
const promotionController = require("../controllers/promotion.controller");
const auth = require("../middlewares/auth.middleware");
const validatePromotion = require("../middlewares/validatePromotion.middleware");

// 👥 Público y privado según endpoint
router.get("/", promotionController.getPromotions);  // Público
router.get("/:id", promotionController.getPromotionById);  // Público
router.post("/", auth, validatePromotion, promotionController.createPromotion);  // Admin/Privado
router.put("/:id", auth, validatePromotion, promotionController.updatePromotion);  // Admin/Privado
router.delete("/:id", auth, promotionController.deletePromotion);  // Admin/Privado

module.exports = router;

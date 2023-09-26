const { Router } = require("express");
const {
  getPaymentsHandler,
  createPaymentHandler,
  getRecurrentProducts,
} = require("../handlers/PaymentHandlers");

const router = Router();

router.get("/", getPaymentsHandler);//para usar con webhooks
router.post("/", createPaymentHandler);//para usar con webhooks
router.get("/products", getRecurrentProducts);//si
router.get("/products/:id", getRecurrentProducts);//si

module.exports = router;

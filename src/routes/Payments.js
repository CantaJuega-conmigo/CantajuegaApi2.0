const { Router } = require("express");
const {
  getPaymentsHandler,
  createPaymentHandler,
  getRecurrentProducts,
} = require("../handlers/PaymentHandlers");

const router = Router();

router.get("/", getPaymentsHandler);
router.post("/", createPaymentHandler);
router.get("/products", getRecurrentProducts);
router.get("/products/:id", getRecurrentProducts);

module.exports = router;

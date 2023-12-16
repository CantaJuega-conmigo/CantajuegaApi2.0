const { Router } = require("express");
const {
  getPaymentsHandler,
  createPaymentHandler,
  getRecurrentProducts,
  getRecurrentSubscriptions,
} = require("../handlers/PaymentHandlers");

const router = Router();

router.get("/", getPaymentsHandler);//para usar con webhooks
router.post("/", createPaymentHandler);//para usar con webhooks
router.get("/products", getRecurrentProducts);//si
router.get("/products/:id", getRecurrentProducts);//si
router.get("/subscriptions",getRecurrentSubscriptions);//si
router.get("/subscriptions/:id",getRecurrentSubscriptions);//si
// router.get('/updateSubscriptions')
// router.get('/updateSubscriptions/:id')

module.exports = router;

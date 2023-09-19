const {Router}=require('express');
const { getPaymentsHandler, createPaymentHandler } = require('../handlers/PaymentHandlers');
const router =Router();

router.get('/',getPaymentsHandler)
router.post('/',createPaymentHandler)
module.exports=router
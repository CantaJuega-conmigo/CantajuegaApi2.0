const { Router } = require('express');
const { validateauth } = require('../middlewares');
const { getProducts, createProduct } = require('../payments');
const { response, ErrorResponse } = require('../utils');
const { newProductRecurrente } = require('../helpers/PaymentsHelpers');
const router = Router();








router.get('/', (req, res) => {
  res.send('Welcome to Cantajuega');
});

router.use('/user', require('./Users'));
router.use('/stage', require('./Stage'));
router.use('/seed', require('./Seed'));
router.use('/membership', require('./Membership'));
router.use('/auth',require('./authgoogle'))
router.use('/payments',require('./Payments'))
router.use('/statistic', require('./Statistic'));

// router.use("/", require("./publics"));

router.post('/webhook',(req,res)=>{
  console.log('Webhook escuchando')
  res.send('Webhook se conecto')
})
router.post('/prueba',async (req, res) => {
  const {body}=req;

  try {
    const bodyFiltered=newProductRecurrente(body)
    const products=await createProduct(bodyFiltered);
    res.send(products)
  } catch (error) {
    // console.log(error);
    res.status(400).send(error.response.data)
  }

});
router.use('/reports', validateauth, require('./Reports'));
router.use('/notifications', require('./Notifications'));
router.use('/progress', require('./Progress'));
router.use('/child', require('./Child'));

router.use('*', (req, res) => {
  res.status(404).send('page not found bro');
});

module.exports = router;

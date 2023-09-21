const { Router } = require('express');
const { validateauth } = require('../middlewares');
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

router.get('/prueba', validateauth, (req, res) => {
  res.send('pagina privada');
});
router.use('/reports', validateauth, require('./Reports'));
router.use('/notifications', require('./Notifications'));
router.use('/progress', require('./Progress'));
router.use('/child', require('./Child'));

router.use('*', (req, res) => {
  res.status(404).send('page not found bro');
});

module.exports = router;

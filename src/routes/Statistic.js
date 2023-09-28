const { Router } = require('express');

const {
  getStatisticHandler,
  createStatisticHandler,
  forcedStatisticHandler,
} = require('../handlers/StatisticsHandlers');

const router = Router();

router.get('/', getStatisticHandler);
router.post('/', createStatisticHandler);
router.post('/forced', forcedStatisticHandler);

module.exports = router;

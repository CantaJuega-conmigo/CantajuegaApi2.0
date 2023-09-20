const { Router } = require('express');

const {
  getStatisticHandler,
  createStatisticHandler,
} = require('../handlers/StatisticsHandlers');

const router = Router();

router.get('/', getStatisticHandler);
router.post('/', createStatisticHandler);

module.exports = router;

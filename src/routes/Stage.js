const { Router } = require('express');

const {
  getStageHandler,
  createStageHandler,
  deleteStageHandler,
  putStageHandler,
  logicalDeletionStageHandler,
} = require('../handlers/StageHandlers');
const { createStageValidator } = require('../validators');
const { validateCreateStage } = require('../middlewares');

const router = Router();

router.get('/', getStageHandler);
router.get('/:id', getStageHandler);
router.post(
  '/create',
  createStageValidator,
  validateCreateStage,
  createStageHandler
);
router.delete('/:id', deleteStageHandler);
router.put('/stages/:id', putStageHandler);
router.patch('/:id', logicalDeletionStageHandler);

module.exports = router;

const { Router } = require('express');
const { validateCreateChild } = require('../middlewares');
const { createChildValidator } = require('../validators');
const {
  getChildHandler,
  createChildHandler,
  deleteChildHandler,
  putChildHandler,
} = require('../handlers/ChildHandlers');

const router = Router();

router.get('/', getChildHandler);
router.get('/:id', getChildHandler);
router.post(
  '/create',
  createChildValidator,
  validateCreateChild,
  createChildHandler
);
router.delete(':id', deleteChildHandler);
router.put('/childs/:id', putChildHandler);

module.exports = router;

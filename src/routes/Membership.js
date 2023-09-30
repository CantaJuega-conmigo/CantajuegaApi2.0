const { Router } = require('express');
const router = Router();

const {
  getMembershipHandler,
  createMembershipHandlers,
  deleteMembershipHandlers,
  logicalDeletionHandlers,
} = require('../handlers/MembershipHandlers');
const { createMembershipValidator } = require('../validators');
const { validateCreateMembership } = require('../middlewares');
// GET
router.get('/', getMembershipHandler);
router.get('/:id', getMembershipHandler);

// POST
router.post(
  '/',
  createMembershipValidator,
  validateCreateMembership,
  createMembershipHandlers
);

// DELETE
router.delete('/:id', deleteMembershipHandlers);
router.patch('/:id', logicalDeletionHandlers);

module.exports = router;

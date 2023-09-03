const { Router } = require('express');
const router = Router();

const { getMembershipHandler, createMembershipHandlers, deleteMembershipHandlers, logicalDeletionHandlers } = require('../../handlers/MembershipHandlers');

// GET
router.get('/', getMembershipHandler);

// POST
router.post('/', createMembershipHandlers);

// DELETE
router.delete('/:id', deleteMembershipHandlers);
router.patch('/:id', logicalDeletionHandlers);

module.exports = router;
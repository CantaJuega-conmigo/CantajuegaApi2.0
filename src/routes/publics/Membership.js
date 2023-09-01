const { Router } = require('express');
const router = Router();

const { getMembershipHandler, createMembershipHandlers, deleteMembershipHandlers } = require('../../handlers/MembershipHandlers');

// GET
router.get('/', getMembershipHandler);

// POST
router.post('/', createMembershipHandlers);

// DELETE
router.delete('/:id', deleteMembershipHandlers);

module.exports = router;
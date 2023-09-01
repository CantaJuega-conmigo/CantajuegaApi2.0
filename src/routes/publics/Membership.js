const { Router } = require('express');
const router = Router();

const { getMembershipHandler, createMembershipHandlers } = require('../../handlers/MembershipHandlers');

// GET
router.get('/', getMembershipHandler);

// POST
router.post('/', createMembershipHandlers);

module.exports = router;
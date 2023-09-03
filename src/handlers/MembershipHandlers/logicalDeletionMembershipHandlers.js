const { logicalDeletionMembership } = require("../../controllers/MembershipContollers/logicalDeletionMembership");

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        await logicalDeletionMembership(id);
        res.send({ message: 'Membership local deletion' });
    } catch (e) {
        res.send({ message: e.message });
    };
};
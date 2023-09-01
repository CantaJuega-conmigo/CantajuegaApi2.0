const { daleteMembership } = require('../../controllers/MembershipContollers');

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        await daleteMembership(id);
        res.send({ message: 'Membership deleted' });
    } catch (e) {
        res.send({ message: e.message });
    };
};
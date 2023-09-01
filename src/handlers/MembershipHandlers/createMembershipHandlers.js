const { createMembership } = require('../../controllers/MembershipContollers');

module.exports = async (req, res) => {
    try {
        await createMembership(req.body);
        console.log('ENTRE HANDLE');
        res.send({ message: 'Membership created' })
        // return await membership;
    } catch (e) {
        throw new Error('Error in the server create handler');
    }
}
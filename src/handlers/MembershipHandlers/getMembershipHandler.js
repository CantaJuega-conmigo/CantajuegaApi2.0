const { getMembership } = require('../../controllers/MembershipContollers');

module.exports = async (req, res) => {
    try {
        const membership = await getMembership();
        res.send(membership);
    } catch (e) {
        res.send('Erro in the server');
    };
};
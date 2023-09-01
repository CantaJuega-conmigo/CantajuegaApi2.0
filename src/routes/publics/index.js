const { Router } = require("express");

const router = Router();

router.use("/user", require("./Users"));
router.use("/stage", require("./Stage"));
router.use("/seed", require("./Seed"));
router.use('/membership', require('./Membership'));

module.exports = router;

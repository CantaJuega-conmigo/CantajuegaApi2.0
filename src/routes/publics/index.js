const { Router } = require("express");

const router = Router();

router.use("/user", require("./Users"));
router.use("/stage", require("./Stage"));
router.use("/seed", require("./Seed"));

module.exports = router;

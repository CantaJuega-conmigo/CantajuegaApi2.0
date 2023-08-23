const { Router } = require("express");

const router = Router();

router.use("/user", require("./Users"));

module.exports = router;

const { Router } = require("express");

const { getStageHandler } = require("../../handlers/StageHandlers");

const router = Router();

router.get("/", getStageHandler);

module.exports = router;

const { Router } = require("express");

const {
  getStageHandler,
  createStageHandler,
} = require("../../handlers/StageHandlers");

const router = Router();

router.get("/", getStageHandler);
router.post("/create", createStageHandler);

module.exports = router;

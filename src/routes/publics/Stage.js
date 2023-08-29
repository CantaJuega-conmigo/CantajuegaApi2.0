const { Router } = require("express");

const {
  getStageHandler,
  createStageHandler,
  deleteStageHandler,
  putStageHandler,
} = require("../../handlers/StageHandlers");

const router = Router();

router.get("/", getStageHandler);
router.post("/create", createStageHandler);
router.delete("/:id", deleteStageHandler);
router.put("/stages/:id", putStageHandler);

module.exports = router;

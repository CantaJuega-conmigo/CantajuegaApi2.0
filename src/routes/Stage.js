const { Router } = require("express");

const {
  getStageHandler,
  createStageHandler,
  deleteStageHandler,
  putStageHandler,
  logicalDeletionStageHandler
} = require("../handlers/StageHandlers");

const router = Router();

router.get("/", getStageHandler);
router.get("/:id", getStageHandler);
router.post("/create", createStageHandler);
router.delete("/:id", deleteStageHandler);
router.put("/stages/:id", putStageHandler);
router.patch("/:id", logicalDeletionStageHandler);

module.exports = router;

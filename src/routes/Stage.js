const { Router } = require("express");

const {
  getStageHandler,
  createStageHandler,
  deleteStageHandler,
  putStageHandler,
  patchStageHandler,
} = require("../handlers/StageHandlers");
const { createStageValidator } = require("../validators");
const { validateCreateStage } = require("../middlewares");

const router = Router();

router.get("/", getStageHandler);
router.get("/:id", getStageHandler);
router.post("/", createStageValidator, validateCreateStage, createStageHandler);
router.delete("/:id", deleteStageHandler);
router.put("/:id", putStageHandler);
router.patch("/:id", patchStageHandler);

module.exports = router;

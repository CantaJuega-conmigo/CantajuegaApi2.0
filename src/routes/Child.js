const { Router } = require("express");

const {
  getChildHandler,
  createChildHandler,
  deleteChildHandler,
  putChildHandler,
  logicalDeletionChildHandler,
} = require("../handlers/ChildHandlers");

const router = Router();

router.get("/", getChildHandler);
router.get("/:id", getChildHandler);
router.post("/create", createChildHandler);
router.delete(":id", deleteChildHandler);
router.put("/childs/:id", putChildHandler);
router.patch('/:id',logicalDeletionChildHandler)

module.exports = router;

const { Router } = require("express");

const {
  getChildHandler,
  createChildHandler,
  deleteChildHandler,
  putChildHandler,
} = require("../handlers/ChildHandlers");

const router = Router();

router.get("/", getChildHandler);
router.post("/create", createChildHandler);
router.delete(":id", deleteChildHandler);
router.put("/childs/:id", putChildHandler);

module.exports = router;

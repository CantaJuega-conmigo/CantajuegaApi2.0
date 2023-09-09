const { Router } = require("express");
const router = Router();
const {
  createReportHandler,
  getReportsHandler,
  deleteReportHandler,
  editReportHandler,
} = require("../handlers/ReportHandlers");
const { validateAdmin } = require("../middlewares");
router.get("/", getReportsHandler);
router.post("/", createReportHandler);
router.delete("/:id", validateAdmin,deleteReportHandler);
router.get("/:id", getReportsHandler);
router.put("/:id", editReportHandler);

module.exports = router;

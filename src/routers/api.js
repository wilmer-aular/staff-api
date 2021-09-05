const { Router } = require("express");
const staffsRouter = require("./staffs.router");
const staffingRouter = require("./staffing.router");

const router = Router();

router.use("/staffs", staffsRouter);
router.use("/staffing", staffingRouter);

module.exports = router;

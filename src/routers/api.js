const { Router } = require("express");
const staffsRouter = require("./staffs.router");
const staffingRouter = require("./staffing.router");
const authRouter = require("./aut.router");
const userRouter = require("./user.router");

const router = Router();

router.use("/staff", staffsRouter);
router.use("/staffing", staffingRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);

module.exports = router;

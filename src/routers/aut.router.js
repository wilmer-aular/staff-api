const { Router } = require("express");
const authCtlr = require("../controllers/auth.controller");
const verifyUser = require("../middlewares/user.middleware");

const router = Router();

router.post("/signup", verifyUser, authCtlr.signUp);
router.post("/signin", authCtlr.signIn);

module.exports = router;

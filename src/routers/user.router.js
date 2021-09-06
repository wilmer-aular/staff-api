const { Router } = require("express");
const userCtlr = require("../controllers/user.controller");
const verifyAuth = require("../middlewares/auth.middleware");
const router = Router();

router.get("/all", verifyAuth, userCtlr.all);
router.put("/:id", verifyAuth, userCtlr.update);

module.exports = router;

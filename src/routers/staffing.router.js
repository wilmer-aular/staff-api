const { Router } = require("express");
const staffingCtrl = require("../controllers/staffing.controller");
const verifyAuth = require("../middlewares/auth.middleware");

const router = Router();
router.get("/", verifyAuth, staffingCtrl.all);
router.get("/:id", verifyAuth, staffingCtrl.byId);
router.get("/find", verifyAuth, staffingCtrl.find);
router.post("/", verifyAuth, staffingCtrl.create);
router.put("/", verifyAuth, staffingCtrl.update);
router.delete("/:id", verifyAuth, staffingCtrl.delete);

module.exports = router;

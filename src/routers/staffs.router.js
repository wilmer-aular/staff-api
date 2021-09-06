const { Router } = require("express");
const verifyAuth = require("../middlewares/auth.middleware");
const staffsCtrl = require("../controllers/staffs.controller");

const router = Router();

router.get("/", verifyAuth, staffsCtrl.all);
router.get("/:id", verifyAuth, staffsCtrl.byId);
router.get("/find", verifyAuth, staffsCtrl.find);
router.post("/", verifyAuth, staffsCtrl.create);
router.put("/", verifyAuth, staffsCtrl.update);
router.delete("/:id", verifyAuth, staffsCtrl.delete);

module.exports = router;

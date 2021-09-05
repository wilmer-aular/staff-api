const { Router } = require("express");
const staffingCtrl = require("../controllers/staffing.controllers");

const router = Router();
router.get("/", staffingCtrl.all);
router.get("/:id", staffingCtrl.byId);
router.get("/find", staffingCtrl.find);
router.post("/", staffingCtrl.create);
router.put("/", staffingCtrl.update);
router.delete("/:id", staffingCtrl.delete);

module.exports = router;

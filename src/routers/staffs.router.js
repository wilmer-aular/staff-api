const { Router } = require("express");

const staffsCtrl = require("../controllers/staffs.controller");

const router = Router();

router.get("/", staffsCtrl.all);
router.get("/:id", staffsCtrl.byId);
router.get("/find", staffsCtrl.find);
router.post("/", staffsCtrl.create);
router.put("/", staffsCtrl.update);
router.delete("/:id", staffsCtrl.delete);

module.exports = router;

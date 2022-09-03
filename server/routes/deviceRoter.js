const express = require("express");
const router = express.Router();

const DeviceController = require("../controllers/deviceController");
router.route("/").post(DeviceController.created);
router.route("/").get(DeviceController.getAll);
router.route("/:id").delete(DeviceController.DeleteDevices);

module.exports = router;

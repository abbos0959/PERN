const express = require("express");
const router = express.Router();

const DeviceController = require("../controllers/deviceController");
router.route("/").post(DeviceController.created);
router.route("/").get(DeviceController.getAll);
router.route("/:id").delete(DeviceController.DeleteDevices);
router.route("/:id").get(DeviceController.getOne);

module.exports = router;

const express = require("express");
const router = express.Router();

const TypeController = require("../controllers/typeController");
router.route("/").post(TypeController.created);
router.route("/").get(TypeController.getAll);

module.exports = router;

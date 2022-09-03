const express = require("express");
const router = express.Router();
const BrandController = require("../controllers/brandController");
router.route("/").post(BrandController.created);
router.route("/").get(BrandController.getAll);

module.exports = router;

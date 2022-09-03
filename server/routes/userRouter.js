const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(userController.registration);
router.route("/login").post(userController.login);
router.route("/auth").get(userController.check);
module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware=require("../middleware/authMiddleware")

router.route("/register").post(userController.registration);
router.route("/login").post(userController.login);
router.route("/auth").get( authMiddleware, userController.check);
module.exports = router;

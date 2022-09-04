const express = require("express");
const router = express.Router();
const RoleMiddleware = require("../middleware/checkRoleMiddleware");

const TypeController = require("../controllers/typeController");
router.route("/").post(RoleMiddleware("ADMIN"), TypeController.created);
router.route("/").get(TypeController.getAll);

module.exports = router;

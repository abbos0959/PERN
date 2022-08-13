const express = require("express");
const router = express.Router();
const brandRouter = require("./brandRoter");
const userRouter = require("./userRouter");
const deviceRouter = require("./deviceRoter");
const typeRouter = require("./typeRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter );

module.exports = router;

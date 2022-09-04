const ApiError = require("../error/ApiError");
const { User, Basket } = require("../models/models");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

class UserController {
   async registration(req, res, next) {
      try {
         const { email, password, role } = req.body;
         if (!email || !password) {
            return next(ApiError.badrequest("Email yoki password kiritmadingiz"));
         }

         const user = await User.findOne({ where: { email } });
         if (user) {
            return next(ApiError.badrequest("bunday user allaqachon mavjud"));
         }
         const hashpassword = await bcrypt.hash(password, 12);
         const newUser = await User.create({ email, role, password: hashpassword });

         const basket = await Basket.create({ userId: newUser.id });
         const token = jwt.sign({ id: newUser.id, email }, "secret", { expiresIn: "24h" });
         return res.json({
            token,
         });
      } catch (error) {
         res.status(400).json({
            message: error.message,
         });
      }
   }

   async login(req, res, next) {
      try {
         const { email, password } = req.body;

         const user = await User.findOne({ where: { email } });

         if (!user) {
            return next(ApiError.internal("bunday user mavjud emas"));
         }
         let compare = await bcrypt.compare(password, user.password);
         if (!compare) {
            return next(ApiError.internal("bunday user mavjud emas"));
         }
         const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, "secret", {
            expiresIn: "24h",
         });
         res.status(200).json({
            message: "siz tizimga kirdiz",
            token,
         });
      } catch (error) {
         res.status(400).json({
            message: error.message,
         });
      }
   }

   async check(req, res, next) {
      const token = jwt.sign(
         { id: req.user.id, email: req.user.email, role: req.user.role },
         "secret",
         { expiresIn: "24h" }
      );

      res.status(200).json({
         token,
      });
   }
}
module.exports = new UserController();

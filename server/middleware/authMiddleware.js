const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
   if (req.method === "OPTIONS") {
      next();
   }

   try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
         return res.status(401).json({ message: "siz ro`yhatdan o`tmagansiz" });
      }

      const decode = jwt.verify(token, "secret");
      req.user = decode;
      next();
   } catch (error) {
      res.status(401).json({
         message: "avtorizatsiya xatoligi",
      });
   }
};

const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");
class TypeController {
   async created(req, res, next) {
      try {
         const { name } = req.body;
         const type = await Type.create({ name });
         res.json(type);
      } catch (error) {
         return next(ApiError.badrequest(error.message));
      }
   }

   async getAll(req, res) {
      const type = await Type.findAll();
      res.status(200).json(type);
   }
}

module.exports = new TypeController();

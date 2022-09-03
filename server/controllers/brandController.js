const { Brand } = require("../models/models");
class BrandController {
   async created(req, res) {
      const { name } = req.body;
      const brand = await Brand.create({ name });
      res.json(brand);
   }

   async getAll(req, res) {
      const brand = await Brand.findAll();
      res.status(200).json(brand);
   }
}

module.exports = new BrandController();

const uuid = require("uuid");
const path = require("path");
const { Device } = require("../models/models");

const ApiError = require("../error/ApiError");

class DeviceController {
   async created(req, res, next) {
      try {
         const { name, price, brandId, typeId } = req.body;

         const { img } = req.files;
         let fileName = uuid.v4() + ".jpg";
         img.mv(path.resolve(__dirname, "..", "static", fileName));

         const device = await Device.create({ name, price, brandId, typeId, img: fileName });
         return res.status(200).json(device);
      } catch (error) {
         return next(ApiError.badrequest(error.message));
      }
   }

   async getAll(req, res, next) {
      let { brandId, typeId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 9;
      let offset = page*limit - limit;
      let devices;

      if (!brandId && !typeId) {
         devices = await Device.findAll({ limit, offset });
      }
      if (brandId && !typeId) {
         devices = await Device.findAll({ where: { brandId }, limit, offset });
      }
      if (!brandId && typeId) {
         devices = await Device.findAll({ where: { typeId }, limit, offset });
      }
      if (brandId && typeId) {
         devices = await Device.findAll({ where: { brandId, typeId }, limit, offset });
      }

      res.status(200).json(devices);
   }
   async DeleteDevices(req, res, next) {
      const deleteDev = await Device.destroy({ where: { id: req.params.id } });

      res.status(200).json({
         message: "delete",
         deleteDev,
      });
   }
}

module.exports = new DeviceController();

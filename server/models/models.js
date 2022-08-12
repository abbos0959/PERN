const sequalize = require("../db");

const { DataTypes } = require("sequelize");
const user = sequalize.define("user", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   email: { type: DataTypes.STRING, unique: true },
   password: { type: DataTypes.STRING, unique: true },
   role: { type: DataTypes.STRING, unique: true, defaultValue: "USER" },
});
const Basket = sequalize.define("basket", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const BasketDevice = sequalize.define("basket_device", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const Device = sequalize.define("device", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   name: { type: DataTypes.STRING, unique: true, allowNull: false },
   price: { type: DataTypes.INTEGER, allowNull: false },
   rating: { type: DataTypes.INTEGER, defaultValue: 0 },
   img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequalize.define("type", {
   id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true },
   name: { type: DataTypes.STRING, unique: true, allowNull: false },
});
const Brand = sequalize.define("brand", {
   id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true },
   name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequalize.define("rating", {
   id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true },
   rate: { type: DataTypes.INTEGER, allowNull: false },
});
const DeviceInfo = sequalize.define("device_info", {
   id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true },
   title: { type: DataTypes.STRING, allowNull: false },
   description: { type: DataTypes.STRING, allowNull: false },
});

const sequalize = require("../db");

const { DataTypes } = require("sequelize");
const user = sequalize.define("user", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

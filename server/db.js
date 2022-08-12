const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
   process.env.DB_NAME, // databazasi nomi
   process.env.DB_USER, //foydalanuvchi
   process.env.DB_PASSWORD, //parol
   {
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
   }
);

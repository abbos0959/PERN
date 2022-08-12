require("dotenv").config()
const express = require("express");
const app = express();
const sequalize = require("./db");

app.use(express.json());

const PORT = process.env.PORT || 4000;
const start = async () => {
   try {
      await sequalize.authenticate();
      await sequalize.sync();
      app.listen(PORT, () => {
         console.log("server ishladi");
      });
   } catch (error) {
      console.log(error);
   }
};

start();

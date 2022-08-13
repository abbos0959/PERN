require("dotenv").config();
const express = require("express");
const app = express();
const sequalize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");

app.use(cors());
app.use(express.json());

app.use("/api", router);

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

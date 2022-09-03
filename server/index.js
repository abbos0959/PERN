require("dotenv").config();
const express = require("express");
const app = express();
const sequalize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const ErrorHandler = require("./middleware/ErrorMiddleware");
const path = require("path");
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
 
app.use("/api", router);

const PORT = process.env.PORT || 4000;

app.use(ErrorHandler);
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

import express from "express";
import dotenv from "dotenv";
import colors from "colors";

const app = express();

// Config Enviroment Vars
dotenv.config();

const PORT = process.env.PORT | 5000;

app.listen(PORT, () =>
  console.log(
    `Server is running on ${process.env.NODE_ENV} mode, on port: ${PORT}`.yellow
      .bold
  )
);

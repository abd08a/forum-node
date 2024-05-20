import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.log("ERR:", err);
  });

app.listen(process.env.PORT, () => {
  console.log("App started on port", process.env.PORT);
});

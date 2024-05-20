import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import questionRoutes from "./src/routes/question.js";

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.log("ERR:", err);
  });

app.use(questionRoutes);

app.listen(process.env.PORT, () => {
  console.log("App started on port", process.env.PORT);
});

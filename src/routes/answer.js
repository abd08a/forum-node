import express from "express";
import {
  GET_ALL_ANSWERS,
  CREATE_ANSWER,
  DELETE_ANSWER,
} from "../controllers/answer.js";

const router = express.Router();

router.get("/questions/:questionId/answers", GET_ALL_ANSWERS);
router.post("/questions/:questionId/answers", CREATE_ANSWER);
router.delete("/questions/:questionId/answers/:answerId", DELETE_ANSWER);

export default router;

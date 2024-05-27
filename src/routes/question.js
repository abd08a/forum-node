import express from "express";
import {
  GET_ALL_QUESTIONS,
  GET_QUESTION_BY_ID,
  CREATE_QUESTION,
  DELETE_QUESTION_BY_ID,
} from "../controllers/question.js";

import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/questions", auth, GET_ALL_QUESTIONS);
router.get("/questions/:id", auth, GET_QUESTION_BY_ID);
router.post("/question", auth, CREATE_QUESTION);
router.delete("/question/:id", auth, DELETE_QUESTION_BY_ID);

export default router;

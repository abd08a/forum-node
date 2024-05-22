import express from "express";
import {
  GET_ALL_QUESTIONS,
  CREATE_QUESTION,
  DELETE_QUESTION_BY_ID,
} from "../controllers/question.js";

import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/questions", GET_ALL_QUESTIONS);
router.post("/questions", auth, CREATE_QUESTION);
router.delete("/questions/:id", DELETE_QUESTION_BY_ID);

export default router;

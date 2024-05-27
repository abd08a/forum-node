import express from "express";
import {
  GET_QUESTION_ANSWERS,
  GET_ANSWERS_BY_ID,
  CREATE_ANSWER,
  DELETE_ANSWER_BY_ID,
} from "../controllers/answer.js";

import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/question/:id/answers", GET_QUESTION_ANSWERS);
// router.get("/question/:id/answers", GET_ANSWERS_BY_ID);
router.post("/question/:id/answer", auth, CREATE_ANSWER);
router.delete("/answer/:id", DELETE_ANSWER_BY_ID);

export default router;

import express from "express";
import { GET_ALL_QUESTIONS, CREATE_QUESTION } from "../controllers/question.js";

const router = express.Router();

router.get("/questions", GET_ALL_QUESTIONS);
router.post("/questions", CREATE_QUESTION);

export default router;

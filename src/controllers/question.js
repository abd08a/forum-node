import { v4 as uuidv4 } from "uuid";
import QuestionModel from "../models/question.js";

export const GET_ALL_QUESTIONS = async (req, res) => {
  try {
    const questions = await QuestionModel.find();

    return res.status(200).json({ questions: questions });
  } catch (err) {
    console.log(err);
  }
};

export const CREATE_QUESTION = async (req, res) => {
  try {
    const question = new QuestionModel({
      id: uuidv4(),
      theme: req.body.theme,
      description: req.body.description,
      name: req.body.name,
      createdAt: req.body.createdAt,
    });

    const response = await question.save();

    return res
      .status(200)
      .json({ question: response, message: "question was added successfully" });
  } catch (err) {
    console.log(err);
  }
};

import QuestionModel from "../models/question.js";
import { v4 as uuidv4 } from "uuid";

// Gauti visus klausimus
export const GET_ALL_QUESTIONS = async (req, res) => {
  try {
    const questions = await QuestionModel.find();
    return res.status(200).json({ questions });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Sukurti naują klausimą
export const CREATE_QUESTION = async (req, res) => {
  try {
    const question = new QuestionModel({
      theme: req.body.theme,
      question: req.body.description,
      name: req.body.name,
      questionId: uuidv4(),
      createdAt: new Date(),
    });

    const response = await question.save();
    return res
      .status(201)
      .json({ question: response, message: "Question added successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Ištrinti klausimą pagal ID
export const DELETE_QUESTION_BY_ID = async (req, res) => {
  try {
    const question = await QuestionModel.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    if (question.userId.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ message: "This question does not belong to you" });
    }

    await QuestionModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Question deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

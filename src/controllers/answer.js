import AnswerModel from "../models/answer.js";
import { v4 as uuidv4 } from "uuid";

// Gauti visus atsakymus pagal klausimo ID
export const GET_QUESTION_ANSWERS = async (req, res) => {
  const { id: questionId } = req.params; // Extract questionId from the request parameters

  try {
    // Find answers where questionId matches the provided questionId
    const answers = await AnswerModel.find({ questionId });

    return res.status(200).json({ answers });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const GET_ANSWERS_BY_ID = async (req, res) => {
  try {
    const answers = await AnswerModel.findOne({ id: req.params.questionId });
    return res.status(200).json({ answers });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Sukurti atsakymą konkrečiam klausimui
export const CREATE_ANSWER = async (req, res) => {
  try {
    const answer = new AnswerModel({
      questionId: req.params.id,
      id: uuidv4(),
      name: req.body.name,
      answer: req.body.answer,
      likes: req.body.likes,
      dislikes: req.body.dislikes,
      createdAt: new Date(),
    });

    const response = await answer.save();
    return res
      .status(201)
      .json({ answer: response, message: "Answer added successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Ištrinti konkretų atsakymą pagal atsakymo ID
export const DELETE_ANSWER_BY_ID = async (req, res) => {
  try {
    const answer = await AnswerModel.findOne({ id: req.params.id });

    // if (answer.questionId !== req.body.questionId) {
    //   return res
    //     .status(401)
    //     .json({ message: "this answer does not belong to you" });
    // }

    const response = await AnswerModel.deleteOne({ id: req.params.id });

    return res.status(200).json({ response: response });
  } catch (err) {
    console.log(err);
  }
};

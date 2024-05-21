import Answer from "../models/answer.js";

// Gauti visus atsakymus pagal klausimo ID
export const GET_ALL_ANSWERS = async (req, res) => {
  try {
    const { questionId } = req.params;
    const answers = await Answer.find({ questionId }).populate("questionId");
    res.status(200).json(answers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Sukurti atsakymą konkrečiam klausimui
export const CREATE_ANSWER = async (req, res) => {
  const { questionId } = req.params;
  const { answer } = req.body;

  const newAnswer = new Answer({
    questionId,
    answer,
    likes: 0,
    dislikes: 0,
    createdAt: new Date(),
  });

  try {
    const savedAnswer = await newAnswer.save();
    const populatedAnswer = await savedAnswer
      .populate("questionId")
      .execPopulate();
    res.status(201).json(populatedAnswer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Ištrinti konkretų atsakymą pagal atsakymo ID
export const DELETE_ANSWER = async (req, res) => {
  const { answerId } = req.params;

  try {
    await Answer.findByIdAndRemove(answerId);
    res.status(200).json({ message: "Answer deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

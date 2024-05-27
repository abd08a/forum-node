import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
  questionId: { type: String, required: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  answer: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  createdAt: { type: Date, default: new Date() },
});

export default mongoose.model("Answer", answerSchema);

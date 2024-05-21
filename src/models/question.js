import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  theme: { type: String, required: true },
  question: { type: String, required: true },
  name: { type: String, required: true },
  questionId: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

export default mongoose.model("Question", questionSchema);

import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  id: { type: String, required: true },
  theme: { type: String, required: true },
  description: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

export default mongoose.model("Question", questionSchema);

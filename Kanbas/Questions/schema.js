import mongoose from "mongoose";
import answerSchema from "../Answers/schema.js";

const questionSchema = new mongoose.Schema({
    q_type: { type: String, required: true },
    title: { type: String, required: true },
    points: { type: Number, default: 1 },
    question_prompt: { type: String, default: "" },
    answers: [answerSchema],
    quiz_id: {type: String, required: true},
}, {collecton: "questions"});

export default questionSchema;
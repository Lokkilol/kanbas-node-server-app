import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    correct: { type: Boolean },
    description: { type: String, required: true },
    question_id: {type: String, required: true}
}, {collection: "answers"});

export default answerSchema

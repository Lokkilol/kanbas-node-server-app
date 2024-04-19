import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    a_id: { type: String, required: true },
    correct: { type: Boolean, required: true },
    description: { type: String, required: true }
});

const questionSchema = new mongoose.Schema({
    q_id: { type: String, required: true },
    q_type: { type: String, required: true },
    title: { type: String, required: true },
    points: { type: Number, required: true },
    question: { type: String, required: true },
    answers: [answerSchema]
});

const quizSchema = new mongoose.Schema({
    quiz_id: { type: String, required: true, unique: true },
    course_id: { type: String, required: true },
    title: { type: String, required: true },
    Description: { type: String, required: true },
    quiz_type: { type: String, required: true },
    assignment_group: { type: String, required: true },
    shuffle: { type: Boolean, required: true },
    time_limit: { type: Number, required: true },
    multiple_attempts: { type: Boolean, required: true },
    show_correct_answer: { type: String, required: true },
    one_question: { type: Boolean, required: true },
    web_cam: { type: Boolean, required: true },
    lock_question: { type: Boolean, required: true },
    due_date: { type: Number, required: true },
    avail_date: { type: Number, required: true },
    until_date: { type: Number, required: true },
    questions: [questionSchema]
}, { collection: "quizzes" });

export default quizSchema;

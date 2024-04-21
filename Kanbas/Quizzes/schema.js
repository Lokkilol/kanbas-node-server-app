import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    _id: { type: String},
    correct: { type: Boolean },
    description: { type: String, required: true }
});

const questionSchema = new mongoose.Schema({
    _id: { type: String},
    q_type: { type: String, required: true },
    title: { type: String, required: true },
    points: { type: Number, required: true },
    question: { type: String, required: true },
    answers: [answerSchema]
});

const quizSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        course_id: { type: String, required: true},
        description: { type: String, default: "" },
        point: { type: Number, default: 100 },
        due_date: { type: Date, default: Date.now },
        avail_date: { type: Date, default: Date.now },
        until_date: { type: Date, default: Date.now },
        published: { type: Boolean, default: false },
        shuffle: { type: Boolean, default: true },
        time_limit: { type: Number, default: 20 },
        multiple_attempts: { type: Boolean, default: false }, 
        show_correct: { type: Boolean, default: false }, 
        access_code: { type: String, default: "" },
        one_question: { type: Boolean, default: true },
        web_cam: { type: Boolean, default: false },
        lock_question: { type: Boolean, default: false },
        quiz_type: {
            type: String,
            enum: [
              "Graded Quiz",
              "Practice Quiz",
              "Graded Survey",
              "Ungraded Survey",
            ],
            default: "Graded Quiz",
          },
          assignment_group: {
            type: String,
            default: "Quizzes",
            enum: ["Quizzes", "Exams", "Assignments", "Project"],
          },
        questions:  [questionSchema]
    
}, { collection: "quizzes" });

export default quizSchema;

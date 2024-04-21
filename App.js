import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js"
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import mongoose from 'mongoose'
import UserRoutes from "./Users/routes.js";
import QuizRoutes from './Kanbas/Quizzes/routes.js';
import QuestionRoutes from './Kanbas/Questions/routes.js';
import AnswerRoutes from './Kanbas/Answers/routes.js';


const app = express()
Hello(app)
app.use(cors());
const CONNECTION_STRING = "mongodb+srv://Lokkilol:CS4550@cluster1723.gng8jdk.mongodb.net/kanbas?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_STRING)
app.use(express.json());
CourseRoutes(app);
Lab5(app)
ModuleRoutes(app);
UserRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);
AnswerRoutes(app);


app.listen(process.env.PORT || 4000);
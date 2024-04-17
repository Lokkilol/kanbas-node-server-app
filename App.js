import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js"
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import mongoose from 'mongoose'
import UserRoutes from "./Users/routes.js";


const app = express()
Hello(app)
app.use(cors());
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb+srv://Cluster12925:X1VFRl5VYlxP@cluster12925.7mxwdvp.mongodb.net/kanbas?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_STRING)
app.use(express.json());
CourseRoutes(app);
Lab5(app)
ModuleRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);
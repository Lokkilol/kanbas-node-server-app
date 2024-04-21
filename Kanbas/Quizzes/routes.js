import * as dao from "./dao.js";

let currentQuiz = null;

export default function QuizRoutes(app) {
    const createQuiz = async (req, res) => {
        const quiz_data = req.body;

          const quiz = await dao.createQuiz(quiz_data);
          res.json(quiz);
        
      };
      app.post("/api/courses/:course_id/quizzes", createQuiz);

    const deleteQuiz = async (req, res) => {
      const status = await dao.deleteQuiz(req.params._id);
      res.json(status);
  };
    app.delete("/api/quizzes/:_id", deleteQuiz)

    const findAllQuizzes = async (req, res) => {
        const quizzes  = await dao.findAllQuizzes();
        res.json(quizzes)
    }
    app.get("/api/quizzes", findAllQuizzes);

    const findQuiz = async (req, res) => {
        const quizId = req.params._id
        const quiz = await dao.findQuizById(quizId)
        res.json(quiz)
    }
    app.get("/api/quizzes/:_id", findQuiz)


    const findQuizzesCourse = async (req, res) => {
        const { courseId } = req.params;
        const quizzes = await dao.findQuizzesCourse(courseId);
        if (!quizzes) {
          res.status(404).send("No quiz for this course");
        } else {
          res.json(quizzes);
        }
    };
    app.get("/api/courses/:courseId/quizzes", findQuizzesCourse);

    const updateQuiz = async (req, res) => {
        const { _id } = req.params;
        const status = await dao.updateQuiz(_id, req.body);
        res.json(status);
    }
    app.put("/api/quizzes/:_id", updateQuiz)

}


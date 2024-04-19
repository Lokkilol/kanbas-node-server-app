import * as dao from "./dao.js";

let currentQuiz = null;

export default function QuizRoutes(app) {
    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };
    app.post("/api/quizzes", createQuiz);

    const deleteQuiz = async (req, res) => {
      const status = await dao.deleteQuiz(req.params.quiz_id);
      res.json(status);
  };
    app.delete("/api/quizzes/:quiz_id", deleteQuiz)

    const findAllQuizzes = async (req, res) => {
        const quizzes  = await dao.findAllQuizzes();
        res.json(quizzes)
    }
    app.get("/api/quizzes", findAllQuizzes);

    const findQuiz = async (req, res) => {
        const quizId = req.params.quiz_id
        const quiz = await dao.findQuizById(quizId)
        res.json(quiz)
    }
    app.get("/api/quizzes/:quiz_id", findQuiz)

    const updateQuiz = async (req, res) => {
        const { quizId } = req.params.quiz_id
        const status = await dao.updateQuiz(quizId, req.body);
        currentQuiz = await dao.findQuizById(quizId);
        res.json(status);
    }
    app.put("/api/quizzes/:quiz_id", updateQuiz)
}

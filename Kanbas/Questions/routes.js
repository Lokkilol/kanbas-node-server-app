import * as dao from "./dao.js";

let currentQuestion = null;

export default function QuestionRoutes(app) {
    const createQuestion = async (req, res) => {
        const question_data = req.body;

          const question = await dao.createQuestion(question_data);
          res.json(question);
        
      };
      app.post("/api/quizzes/:quiz_id/questions", createQuestion);

    const deleteQuestion = async (req, res) => {
      const status = await dao.deleteQuestion(req.params._id);
      res.json(status);
  };
    app.delete("/api/questions/:_id", deleteQuestion)

    const findAllQuestions = async (req, res) => {
        const questions  = await dao.findAllQuestions();
        res.json(questions)
    }
    app.get("/api/questions", findAllQuestions);

    const findQuestion = async (req, res) => {
        const questionId = req.params._id
        const question = await dao.findQuestionById(questionId)
        res.json(question)
    }
    app.get("/api/questions/:_id", findQuestion)


    const findQuestionsQuiz = async (req, res) => {
        const { quizId } = req.params;
        const questions = await dao.findQuestionsQuiz(quizId);
        if (!questions) {
          res.status(404).send("No questions for this quiz");
        } else {
          res.json(questions);
        }
    };
    app.get("/api/quizzes/:quizId/questions", findQuestionsQuiz);

    const updateQuestion = async (req, res) => {
        const { _id } = req.params;
        const status = await dao.updateQuestion(_id, req.body);
        res.json(status);
    }
    app.put("/api/questions/:_id", updateQuestion)

}
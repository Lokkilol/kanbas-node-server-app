import * as dao from "./dao.js";

let currentQuestion = null;

export default function AnswerRoutes(app) {
    const createAnswer = async (req, res) => {
        const answer_data = req.body;

          const answer = await dao.createAnswer(answer_data);
          res.json(answer);
        
      };
      app.post("/api/questions/:question_id/answers", createAnswer);

    const deleteAnswer = async (req, res) => {
      const status = await dao.deleteAnswer(req.params._id);
      res.json(status);
  };
    app.delete("/api/answers/:_id", deleteAnswer)

    const findAllAnswers = async (req, res) => {
        const answers  = await dao.findAllAnswers();
        res.json(answers)
    }
    app.get("/api/answers", findAllAnswers);

    const findAnswer = async (req, res) => {
        const answerId = req.params._id
        const answer = await dao.findAnswerById(answerId)
        res.json(answer)
    }
    app.get("/api/answers/:_id", findAnswer)


    const findAnswersQuestion = async (req, res) => {
        const { questionId } = req.params;
        const answers = await dao.findAnswersQuestion(questionId);
        if (!answers) {
          res.status(404).send("No answers for this question");
        } else {
          res.json(answers);
        }
    };
    app.get("/api/questions/:questionId/answers", findAnswersQuestion);

    const updateAnswer = async (req, res) => {
        const { _id } = req.params;
        const status = await dao.updateAnswer(_id, req.body);
        res.json(status);
    }
    app.put("/api/answers/:_id", updateAnswer)

}
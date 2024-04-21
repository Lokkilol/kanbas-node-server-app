import model from './model.js';

export const createQuestion = (question) => {
    return model.create(question)
};

export const findAllQuestions = () => model.find();
export const findQuestionById = (questionId) =>
  model.findOne({_id: questionId})
export const updateQuestion = (questionId, question) =>  model.updateOne({ _id: questionId }, { $set: question });
export const deleteQuestion = (questionId) => model.deleteOne({ _id: questionId });
export const findQuestionsQuiz = (quizId) =>
  model.find({ quiz_id: quizId });

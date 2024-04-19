import model from './model.js';

export const createQuiz = async (quiz) => {
    model.create(quiz)
};
export const findAllQuizzes = () => model.find();
export const findQuizById = (quizId) =>
  model.findOne({quiz_id: quizId})
export const updateQuiz = (quizId, quiz) =>  model.updateOne({ quiz_id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ quiz_id: quizId });



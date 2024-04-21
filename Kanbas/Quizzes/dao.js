import model from './model.js';

export const createQuiz = (quiz) => {
    return model.create(quiz)
};

export const findAllQuizzes = () => model.find();
export const findQuizById = (quizId) =>
  model.findOne({_id: quizId})
export const updateQuiz = (quizId, quiz) =>  model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });
export const findQuizzesCourse = (courseId) =>
  model.find({ course_id: courseId });



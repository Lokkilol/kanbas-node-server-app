import model from './model.js';

export const createAnswer = (answer) => {
    return model.create(answer)
};

export const findAllAnswers = () => model.find();
export const findAnswerById = (answerId) =>
  model.findOne({_id: answerId})
export const updateAnswer = (answerId, answer) =>  model.updateOne({ _id: answerId }, { $set: answer });
export const deleteAnswer = (answerId) => model.deleteOne({ _id: answerId });
export const findAnswersQuestion = (questionId) =>
  model.find({ question_id: questionId });

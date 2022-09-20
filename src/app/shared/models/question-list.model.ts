import { QuestionModel } from "./question.model";

export interface QuestionListModel {
    answeredQuestionsList: Array<QuestionModel>;
    unAnsweredQuestionsList: Array<QuestionModel>;
}
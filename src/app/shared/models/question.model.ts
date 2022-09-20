import { QuestionTypeEnum } from "../enums/question-type.enum";
import { AnswerModel } from "./answer.model";

export interface QuestionModel {
    id: string;
    creationDate: Date;
    answerDate?: Date;
    questionType?: QuestionTypeEnum;
    questionMessage?: string;
    suggestedAnswersList?: Array<AnswerModel>;
    answerResult?: string | AnswerModel | Array<AnswerModel>;
}

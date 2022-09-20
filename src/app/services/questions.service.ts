import { Injectable } from '@angular/core';
import { QuestionListModel } from '../shared/models/question-list.model';
import { QuestionModel } from '../shared/models/question.model';

const QUESTION_STORAGE_KEY: string = "questions";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  public getAllQuestions(): Array<QuestionModel> {
    const allQuestionsString = localStorage.getItem(QUESTION_STORAGE_KEY);
    return allQuestionsString ? JSON.parse(allQuestionsString) : [];
  }

  public getQuestionById(questionId: string): QuestionModel | undefined {
    const allQuestions = this.getAllQuestions();
    return allQuestions.find(x => x.id === questionId);
  }

  public getFilteredByAnswerQuestions(): QuestionListModel {
    const allQuestions = this.getAllQuestions();
    const unAnsweredQuestions = new Array<QuestionModel>();
    const answeredQuestions = new Array<QuestionModel>();
    allQuestions.forEach(question => {
      if (question.answerDate) {
        answeredQuestions.push(question);
      } else {
        unAnsweredQuestions.push(question);
      }
    })
    return {
      unAnsweredQuestionsList: this.getQuestionsArrayByCreationDate(unAnsweredQuestions),
      answeredQuestionsList: this.getQuestionsArrayByAnswerDate(answeredQuestions)
    }
  }

  public getQuestionsArrayByCreationDate(questions: Array<QuestionModel>): Array<QuestionModel> {
    return questions.sort((a, b) => {
      return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
    });
  }

  public getQuestionsArrayByAnswerDate(questions: Array<QuestionModel>): Array<QuestionModel> {
    return questions.sort((a, b) => {
      if (!a.answerDate || !b.answerDate) {
        return 0;
      }
      return  new Date(b.answerDate).getTime() - new Date(a.answerDate).getTime();
    });
  }

  public createQuestion(newQuestion: QuestionModel): Array<QuestionModel> {
    const allQuestions = this.getAllQuestions();
    const newQuestions = [...allQuestions, newQuestion];
    localStorage.setItem(QUESTION_STORAGE_KEY, JSON.stringify(newQuestions));
    return allQuestions;
  }

  public updateQuestion(updatedQuestion: QuestionModel): Array<QuestionModel> {
    const allQuestions = this.getAllQuestions();
    const updatedIndex = allQuestions.findIndex(q => q.id === updatedQuestion.id);
    allQuestions[updatedIndex] = updatedQuestion;
    localStorage.setItem(QUESTION_STORAGE_KEY, JSON.stringify(allQuestions));
    return allQuestions;
  }

  public removeQuestion(questionId: string): Array<QuestionModel> {
    const questions = this.getAllQuestions();
    const resultItems = questions.filter(x => x.id !== questionId);
    localStorage.setItem(QUESTION_STORAGE_KEY, JSON.stringify(resultItems));
    return resultItems;
  }

}

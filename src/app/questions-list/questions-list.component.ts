import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerModel } from '../shared/models/answer.model';
import { QuestionListModel } from '../shared/models/question-list.model';
import { QuestionModel } from '../shared/models/question.model';
import { QuestionsService } from './../services/questions.service';
import { QuestionTypeEnum } from './../shared/enums/question-type.enum';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent {

  public answeredQuestions = new Array<QuestionModel>();
  public unAnsweredQuestions = new Array<QuestionModel>();
  public questionTypes = QuestionTypeEnum;

  constructor(private _questionService: QuestionsService, private router: Router) {
    this._initializeValues();
  }

  private _initializeValues(): void {
    const filteredQuestion = this._loadQuestions();
    this.answeredQuestions = filteredQuestion.answeredQuestionsList;
    this.unAnsweredQuestions = filteredQuestion.unAnsweredQuestionsList;
  }

  private _loadQuestions(): QuestionListModel {
    return this._questionService.getFilteredByAnswerQuestions();
  }

  private _moveNewAnswered(question: QuestionModel): void {
    const answerIndex = this.unAnsweredQuestions.findIndex(q => q.id === question.id);
    this.unAnsweredQuestions.splice(answerIndex, 1);
    this.answeredQuestions.unshift(question);
    this.answeredQuestions = this._questionService.getQuestionsArrayByAnswerDate(this.answeredQuestions);
  }

  private _moveFromAnswered(question: QuestionModel): void {
    const answerIndex = this.answeredQuestions.findIndex(q => q.id === question.id);
    this.answeredQuestions.splice(answerIndex, 1);
    this.unAnsweredQuestions.unshift(question);
    this.unAnsweredQuestions = this._questionService.getQuestionsArrayByCreationDate(this.unAnsweredQuestions);
  }

  public onSaveAnswer(question: QuestionModel, answerResult: string | AnswerModel | Array<AnswerModel>): void {
    const updateModel: QuestionModel = { ...question, answerResult: answerResult, answerDate: new Date() };
    this._questionService.updateQuestion(updateModel);
    this._moveNewAnswered(updateModel);
  }

  public removeAnswer(question: QuestionModel): void {
    const updatedQuestion: QuestionModel = { ...question, answerResult: undefined, answerDate: undefined };
    this._questionService.updateQuestion(updatedQuestion);
    this._moveFromAnswered(updatedQuestion);
  }

}

import { Component } from '@angular/core';
import { QuestionModel } from '../shared/models/question.model';
import { QuestionsService } from './../services/questions.service';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss']
})
export class QuestionManagementComponent {

  public questions = new Array<QuestionModel>();

  constructor(private _questionService: QuestionsService) {
    this.questions = this._loadSortedByDateQuestions();
  }

  private _loadSortedByDateQuestions(): Array<QuestionModel> {
    const allQuestions = this._questionService.getAllQuestions();
    return this._sortArrayByCreationDate(allQuestions);
  }

  private _sortArrayByCreationDate(questions: Array<QuestionModel>): Array<QuestionModel> {
    return questions.sort((a, b) => {
      return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
    });
  }

  public removeQuestion(id: string): void {
    const updatedQuestions = this._questionService.removeQuestion(id);
    this.questions = this._sortArrayByCreationDate(updatedQuestions);
  }
  
}

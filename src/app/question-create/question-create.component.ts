import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../services/questions.service';
import { QuestionModel } from '../shared/models/question.model';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent {

  constructor(private _router: Router, private _questionService: QuestionsService) { }

  public createQuestion(questionModel: QuestionModel): void {
    this._questionService.createQuestion(questionModel);
    this._router.navigate(["management"]);
  }

}

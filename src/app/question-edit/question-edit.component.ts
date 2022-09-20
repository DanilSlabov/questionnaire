import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../services/questions.service';
import { QuestionModel } from '../shared/models/question.model';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent {

  public question?: QuestionModel;

  constructor(private router: Router, private route: ActivatedRoute, private _questionService: QuestionsService) {
    const questionId = this.route.snapshot.paramMap.get('id');
    if (!questionId) {
      this.router.navigate(["create"]);
      return;
    }
    this.question = this._loadQuestionInfo(questionId);
    if (!this.question) {
      this.router.navigate(["create"]);
    }
  }

  private _loadQuestionInfo(id: string): QuestionModel | undefined {
    return this._questionService.getQuestionById(id);
  }

  public saveChanges(questionModel: QuestionModel): void {
    this._questionService.updateQuestion(questionModel);
    this.router.navigate(["management"]);
  }

}

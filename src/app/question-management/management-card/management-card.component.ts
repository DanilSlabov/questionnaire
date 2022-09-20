import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionModel } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-management-card',
  templateUrl: './management-card.component.html',
  styleUrls: ['./management-card.component.scss']
})
export class ManagementCardComponent {

  @Input() public question?: QuestionModel;
  @Output() public onRemoveQuestion = new EventEmitter<string>();

  constructor() { }

  public removeQuestion(questionId: string): void {
    this.onRemoveQuestion.emit(questionId);
  }
}

import { Component, Input } from '@angular/core';
import { AnswerModel } from '../../models/answer.model';
import { QuestionModel } from '../../models/question.model';
import { QuestionTypeEnum } from './../../enums/question-type.enum';

export interface AnswerModelExtended extends AnswerModel {
  originalIndex: number;
}

@Component({
  selector: 'app-question-answer-result',
  templateUrl: './question-answer-result.component.html',
  styleUrls: ['./question-answer-result.component.scss']
})
export class QuestionAnswerResultComponent {

  @Input() question?: QuestionModel

  public questionTypes = QuestionTypeEnum;

  public get openAnswerResult(): string {
    return this.question ? this.question.answerResult as string : "";
  }
  public get signleAnswerResult(): AnswerModel | null {
    return this.question ? this.question.answerResult as AnswerModel : null;
  }
  public get multipleAnswerResult(): Array<AnswerModel> | null {
    return this.question ? this.question.answerResult as Array<AnswerModel> : null;
  }

  constructor() { }

}

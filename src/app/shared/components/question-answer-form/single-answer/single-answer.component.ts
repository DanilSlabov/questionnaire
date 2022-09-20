import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignAnswerFormModel } from 'src/app/shared/form-models/signle-answer-form.model';
import { AnswerModel } from 'src/app/shared/models/answer.model';


@Component({
  selector: 'app-single-answer',
  templateUrl: './single-answer.component.html',
  styleUrls: ['./single-answer.component.scss']
})
export class SingleAnswerComponent implements OnInit {

  @Input() public suggestedAnswers?: Array<AnswerModel>
  @Output() public submitAnswer = new EventEmitter<AnswerModel>;

  public singleAnswerForm: FormGroup<SignAnswerFormModel>;

  constructor(private _fb: FormBuilder) {
    this.singleAnswerForm = this._createForm();
  }

  ngOnInit() {

  }

  private _createForm(): FormGroup<SignAnswerFormModel> {
    return this._fb.group({
      answerId: new FormControl("", [Validators.required])
    })
  }

  public onSubmitAnswer(): void {
    if (this.singleAnswerForm.invalid) {
      this.singleAnswerForm.markAllAsTouched();
      return;
    }
    if (!this.suggestedAnswers) {
      return;
    }
    const selectedAnswerId = this.singleAnswerForm.value.answerId;
    const suggestedAnswer = this.suggestedAnswers.find(answer => answer.id === selectedAnswerId);
    if (suggestedAnswer) {
      this.submitAnswer?.emit(suggestedAnswer);
    }
  }

}

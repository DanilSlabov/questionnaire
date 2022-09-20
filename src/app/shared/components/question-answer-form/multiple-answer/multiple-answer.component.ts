import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnswerModel } from 'src/app/shared/models/answer.model';
import { MultipleAnswersFormModel } from 'src/app/shared/form-models/multi-answer-form.model';

@Component({
  selector: 'app-multiple-answer',
  templateUrl: './multiple-answer.component.html',
  styleUrls: ['./multiple-answer.component.scss']
})
export class MultipleAnswerComponent implements OnInit {

  @Input() public suggestedAnswers?: Array<AnswerModel>
  @Output() public submitAnswers = new EventEmitter<Array<AnswerModel>>;

  public multipleAnswersForm?: FormGroup<MultipleAnswersFormModel>;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.multipleAnswersForm = this._createForm(this.suggestedAnswers);
  }

  private _createForm(answersValues?: Array<AnswerModel>): FormGroup<MultipleAnswersFormModel> | undefined {
    if (!answersValues) {
      return;
    }
    const res = this._fb.group<MultipleAnswersFormModel>({
      selectedByIndex: this._fb.array<FormControl<boolean | null>>(answersValues.map(val => this._getAnswerItemForm()), [this._isAnyTrueValidator()])
    });
    return res;
  }

  private _isAnyTrueValidator(): ValidatorFn {
    return (control) => {
      if (!control) {
        return null;
      }
      const formArray = control as FormArray<FormControl<boolean>>
      if (formArray.value.some((val) => val)) {
        return null;
      }
      return {
        'selected-required': true
      }
    }
  }
  private _getAnswerItemForm(): FormControl<boolean | null> {
    return new FormControl<boolean>(false);
  }

  public onSubmitAnswers(): void {
    if (!this.multipleAnswersForm || !this.suggestedAnswers) {
      return;
    }
    if (this.multipleAnswersForm.invalid) {
      this.multipleAnswersForm.markAllAsTouched();
      return;
    }
    const selectedByIndex = this.multipleAnswersForm.controls.selectedByIndex.value;
    const eventArray: Array<AnswerModel> = this.suggestedAnswers.filter((answer, index) => {
      return selectedByIndex[index];
    });
    this.submitAnswers.emit(eventArray);
  }

}

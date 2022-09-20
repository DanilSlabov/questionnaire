import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface OpenAnswerInputForm {
  message: FormControl<string | null>;
}

@Component({
  selector: 'app-open-answer',
  templateUrl: './open-answer.component.html',
  styleUrls: ['./open-answer.component.scss']
})

export class OpenAnswerComponent {

  @Output() public submitAnswer = new EventEmitter<string>();

  public openAnswerForm: FormGroup<OpenAnswerInputForm>;

  constructor(private _fb: FormBuilder) {
    this.openAnswerForm = this._createForm();
  }

  private _createForm(): FormGroup<OpenAnswerInputForm> {
    return this._fb.group({
      message: new FormControl("", [Validators.required, Validators.maxLength(255)])
    });
  }

  public onSubmitAnswer(): void {
    if (this.openAnswerForm.invalid) {
      return;
    }
    const answerMessage: string = this.openAnswerForm.controls.message.value || "";
    this.submitAnswer.emit(answerMessage);
  }

}

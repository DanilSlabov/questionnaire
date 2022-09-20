import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 } from "uuid";
import { QuestionTypeEnum } from '../../enums/question-type.enum';
import { CreateQuestionFormModel } from '../../form-models/create-question-form.model';
import { SuggestedAnswersArrayForm } from '../../form-models/suggested-answers-array-form.model';
import { AnswerModel } from '../../models/answer.model';
import { QuestionModel } from '../../models/question.model';

@Component({
  selector: 'app-question-create-edit-form',
  templateUrl: './question-create-edit-form.component.html',
  styleUrls: ['./question-create-edit-form.component.scss']
})
export class QuestionCreateEditFormComponent implements OnInit {

  @Input() public questionModel?: QuestionModel;

  @Output() public onFormSubmit = new EventEmitter<QuestionModel>();

  public createEditForm: FormGroup<CreateQuestionFormModel>;
  public suggestedAnswersForm: FormGroup<SuggestedAnswersArrayForm>;
  public questionTypes = QuestionTypeEnum;

  public get isNewQuestion(): boolean {
    return !this.questionModel
  }

  public get selectedQuestionType(): QuestionTypeEnum | null {
    return this.createEditForm?.controls?.questionType.value;
  }

  public get suggestedAnswersItemFormArray(): FormArray<FormControl<string>> {
    return this.suggestedAnswersForm.controls.items;
  }

  constructor(private _fb: FormBuilder) {
    this.createEditForm = this._getNewForm();
    this.suggestedAnswersForm = this._getInitialAnswerFormArray();
  }

  ngOnInit(): void {
    this._initializeFormWithValues(this.questionModel);
  }

  private _getNewForm(): FormGroup<CreateQuestionFormModel> {
    const formGroupObject: CreateQuestionFormModel = {
      "questionType": new FormControl(null, [Validators.required]),
      "questionMessage": new FormControl(null, [Validators.required]),
    }
    return this._fb.group(formGroupObject);
  }

  private _getInitialAnswerFormArray(values?: Array<AnswerModel>): FormGroup<SuggestedAnswersArrayForm> {
    let initializedFormArray = new Array<FormControl<string>>(this._getBasicAnswerControl());
    if (values) {
      initializedFormArray = values.map(val => this._getBasicAnswerControl(val.answerMessage));
    }
    return this._fb.group(
      {
        items: this._fb.array(initializedFormArray, [Validators.minLength(2)])
      }
    )
  }

  private _initializeFormWithValues(questionModel?: QuestionModel): void {
    if (!questionModel) {
      return;
    }
    this.createEditForm.setValue({
      questionMessage: questionModel.questionMessage || null,
      questionType: questionModel.questionType || null
    });
    if (questionModel.suggestedAnswersList && questionModel.suggestedAnswersList.length) {
      this.suggestedAnswersForm = this._getInitialAnswerFormArray(questionModel.suggestedAnswersList)
    }
  }

  private _getBasicAnswerControl(messageValue?: string): FormControl {
    return new FormControl(messageValue || null, [Validators.required]);
  }

  public onAddNewAnswer(): void {
    this.suggestedAnswersItemFormArray.push(this._getBasicAnswerControl())
  }

  public onRemoveAnswer(index: number): void {
    this.suggestedAnswersItemFormArray.removeAt(index);
  }

  public onSubmitForm(): void {
    if (this.createEditForm.invalid ||
      (this.suggestedAnswersItemFormArray.invalid && this.selectedQuestionType !== this.questionTypes.OpenAnswer)) {
      this.createEditForm.markAllAsTouched();
      this.suggestedAnswersForm.markAllAsTouched();
      return;
    }
    const questionModel: QuestionModel = {
      id: this.questionModel?.id || v4(),
      creationDate: this.questionModel?.creationDate || new Date(),
      questionType: this.createEditForm.controls.questionType.value || QuestionTypeEnum.OpenAnswer,
      questionMessage: this.createEditForm.controls.questionMessage.value || "",
      suggestedAnswersList: []
    }
    if (questionModel.questionType !== this.questionTypes.OpenAnswer) {
      questionModel.suggestedAnswersList = this.suggestedAnswersItemFormArray.controls.map(answer => ({
        id: v4(),
        answerMessage: answer.value
      }));
    }
    this.onFormSubmit.emit(questionModel);
  }

}

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { OpenAnswerComponent } from './open-answer/open-answer.component';
import { SingleAnswerComponent } from './single-answer/single-answer.component';
import { MultipleAnswerComponent } from './multiple-answer/multiple-answer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [
    MultipleAnswerComponent,
    SingleAnswerComponent,
    OpenAnswerComponent
  ],
  declarations: [
    MultipleAnswerComponent,
    SingleAnswerComponent,
    OpenAnswerComponent
  ]
})
export class QuestionAnswerFormModule { }

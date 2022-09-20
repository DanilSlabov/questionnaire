import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuestionAnswerResultModule } from './../shared/components/question-answer-result/question-answer-result.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { QuestionAnswerFormModule } from './../shared/components/question-answer-form/question-answer-form.module';
import { QuestionsListComponent } from './questions-list.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionAnswerFormModule,
    MatCardModule,
    MatDividerModule,
    QuestionAnswerResultModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [QuestionsListComponent]
})
export class QuestionsListModule { }

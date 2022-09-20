import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { QuestionCreateEditFormModule } from './../shared/components/question-create-edit-form/question-create-edit-form.module';
import { QuestionCreateComponent } from './question-create.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionCreateEditFormModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [QuestionCreateComponent]
})
export class QuestionCreateModule { }

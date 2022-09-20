import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { QuestionCreateEditFormModule } from './../shared/components/question-create-edit-form/question-create-edit-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionEditComponent } from './question-edit.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionCreateEditFormModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [QuestionEditComponent]
})
export class QuestionEditModule { }

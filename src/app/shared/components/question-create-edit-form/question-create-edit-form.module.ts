import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCreateEditFormComponent } from './question-create-edit-form.component';
import { MatInputModule } from "@angular/material/input"
import { MatRadioModule } from "@angular/material/radio"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [QuestionCreateEditFormComponent],
  declarations: [QuestionCreateEditFormComponent]
})
export class QuestionCreateEditFormModule { }

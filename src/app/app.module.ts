import { QuestionsListModule } from './questions-list/questions-list.module';
import { QuestionManagementModule } from './question-management/question-management.module';
import { QuestionEditModule } from './question-edit/question-edit.module';
import { QuestionCreateModule } from './question-create/question-create.module';
import { QuestionCreateEditFormModule } from './shared/components/question-create-edit-form/question-create-edit-form.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const PAGES = [
  QuestionCreateModule,
  QuestionEditModule,
  QuestionManagementModule,
  QuestionsListModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuestionCreateEditFormModule,
    ...PAGES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

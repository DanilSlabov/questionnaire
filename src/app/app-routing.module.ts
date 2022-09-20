import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionManagementComponent } from './question-management/question-management.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'create', component: QuestionCreateComponent },
  { path: 'edit/:id', component: QuestionEditComponent },
  { path: "management", component: QuestionManagementComponent },
  { path: "list", component: QuestionsListComponent },
  { path: "", redirectTo: "management", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

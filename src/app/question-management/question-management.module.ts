import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ManagementCardComponent } from './management-card/management-card.component';
import { QuestionManagementComponent } from './question-management.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ],
  declarations: [QuestionManagementComponent, ManagementCardComponent]
})
export class QuestionManagementModule { }

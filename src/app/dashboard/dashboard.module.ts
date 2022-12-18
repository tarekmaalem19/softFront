import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProjectListComponent,
    FilterComponent,
    AddProjectComponent,
    EditProjectComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }

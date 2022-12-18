import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { DashboardComponent } from './dashboard.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  { path: 'projects', component: ProjectListComponent},
  {path:'projects/add', component: AddProjectComponent},
  {path:'projects/add/:id', component: EditProjectComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

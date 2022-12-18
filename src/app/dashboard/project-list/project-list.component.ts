import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectService:ProjectService, private route: ActivatedRoute) {}

  params!: any;
  list!:any;
  path!:string;
  
  ngOnInit(): void {
  }

  onListAdd(event:any) {
    this.list = event;
  }
}

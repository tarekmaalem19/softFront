import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() finalList = new EventEmitter<any>();
  filterForm: FormGroup;
  
  constructor(private route:Router,private projectService:ProjectService,private router: ActivatedRoute) {
    this.filterForm = new FormGroup({
      status: new FormControl(''),
      title: new FormControl(''),
      filteName: new FormControl('')
    });
  }

  params!: any;
  list!:any;
  path!:string;
  queryParams!:any

  ngOnInit(): void {
    this.lists();
  }
  
  onSubmit() {
    this.route.navigate(['/dashboard/projects'],{ queryParams: this.filterForm.value });
    this.setParams();
    this.queryParams = new HttpParams({ fromObject: this.params }); 
    this.lists();
  }

  setParams(){
    this.router.queryParams.subscribe((params: any) => {
      this.params = params;
    });
  }

  lists(){
    console.log(this.params)
    this.projectService.projects(this.queryParams).subscribe({
      next: (Response) => {
       this.list = Response;
       console.log(Response)
       this.finalList.emit(this.list);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }
}

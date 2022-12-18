import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  projectForm: FormGroup;
  fileName!: string;
  formData!:FormData;
  project:any;

  constructor(private projectService:ProjectService,private route:Router,private router: ActivatedRoute) {
    this.projectForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      tasksNumber: new FormControl('', [Validators.required]),
      fileName: new FormControl('', [Validators.required]),
      path: new FormControl('', [Validators.required])
    });

    this.formData = new FormData();
  }
  ngOnInit(): void {
      this.projectService.find(this.router.snapshot.params['id']).subscribe({
        next: (Response) => {
          this.project = Response;
          this.projectForm.get('title')?.setValue(this.project.title);
          this.projectForm.get('description')?.setValue(this.project.description);
          this.projectForm.get('status')?.setValue(this.project.status);
          this.projectForm.get('tasksNumber')?.setValue(this.project.tasksNumber);
          this.projectForm.get('path')?.setValue(this.project.path);
          this.projectForm.get('fileName')?.setValue(this.project.path);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })

  }
  onSubmit() {
    if(this.projectForm.valid) {
        this.projectService.edit(this.projectForm.value, this.router.snapshot.params['id']).subscribe({
        next: (Response) => {
          this.route.navigateByUrl('/dashboard/projects');
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
     
      })
    }
  }
  
  get f() { return this.projectForm.controls; }
}

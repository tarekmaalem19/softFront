import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  projectForm: FormGroup;
  fileName!: string;
  formData!:FormData;

  constructor(private projectService:ProjectService,private route:Router) {
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

  }
  onSubmit() {
    if(this.projectForm.valid) {
        this.projectService.add(this.projectForm.value).subscribe({
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

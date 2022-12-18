import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  
  constructor(private authService:AuthService,private route:Router) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {

  }
  onSubmit() {
    if(this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (Response) => {
          localStorage.setItem('currentUser',JSON.stringify(Response))
          this.route.navigateByUrl('/auth/login');
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
     
      })
    }
  }

  get f() { return this.registerForm.controls; }


  
  public logout(): void {
    // todo
  }

}

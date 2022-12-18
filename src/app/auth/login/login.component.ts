import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private authService:AuthService,private route:Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {

  }
  onSubmit() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (Response) => {
          localStorage.setItem('currentUser',JSON.stringify(Response))
          this.route.navigate(['/dashboard/projects']);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
     
      })
    }
  }

  get f() { return this.loginForm.controls; }


  
  public logout(): void {
    // todo
  }

}

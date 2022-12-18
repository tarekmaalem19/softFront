import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(private http:HttpClient) { 
    console.log(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  
  login(credentials:User){
  return this.http.post(`${environment.api}/auth/login`,credentials);
  }
  
  register(user:Register){
    return this.http.post(`${environment.api}/auth/register`,user);
  }
  setCurrentUser(user:any){
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  isAdmin(){
    this.currentUserSubject.subscribe(Response=>{
      console.log(Response)
    })
  }

}

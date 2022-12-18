import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor  implements HttpInterceptor{

  constructor(private auth:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.auth.currentUserValue;

    if (currentUser) {
        req = req.clone({
            setHeaders: { 
                Authorization: `Bearer ${currentUser?.token}`
            }
        });
    }
    
    return next.handle(req);
    }
}

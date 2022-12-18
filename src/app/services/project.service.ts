import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  projects(queryParams:any) {
    return this.http.get(`${environment.api}/api/projects`,{params:queryParams});
  }
  
  add(data:any) {
    return this.http.post(`${environment.api}/api/projects`,data);
  }

  edit(data:any, id:any) {
    return this.http.put(`${environment.api}/api/projects/${id}`,data);
  }

  find(id:any) {
    return this.http.get(`${environment.api}/api/projects/${id}`);
  }

  delete(id:any) {
    return this.http.delete(`${environment.api}/api/projects/${id}`);
  }
}

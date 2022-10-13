import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  adminSignIn(admin:any):Observable<string>{
    return this.http.post("http://localhost:8080/admin/adminSignIn", admin, {responseType:'text'});
  }

  adminSignUp(admin:any):Observable<string>{
    return this.http.post("http://localhost:8080/admin/adminSignUp", admin, {responseType: 'text'});
  }
}
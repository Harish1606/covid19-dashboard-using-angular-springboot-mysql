import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../modules/admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }

  public login(admin:Admin):Observable<any>{
    return this.http.post<any>('http://localhost:8080/authenticate',admin);
  }

  loggedIn(){
    if(!!localStorage.getItem('admin')){
      if(localStorage.getItem('admin').length>90){
        return true;
      }
    }
  }


  logoutUser(){
    localStorage.removeItem('admin');
    this.router.navigate(['/admin']);
  }

}

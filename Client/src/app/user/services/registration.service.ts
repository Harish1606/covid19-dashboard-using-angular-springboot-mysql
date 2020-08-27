import { Injectable } from '@angular/core';
import { User } from '../modules/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient,private router:Router) { }

  public login(user:User):Observable<any>{
    return this.http.post<any>('http://localhost:8080/authenticate',user);
  }

  public register(user:User):Observable<any>{
    return this.http.post<any>('http://localhost:8080/register',user);
  }

  loggedIn(){
    if(!!localStorage.getItem('user')){
      if(localStorage.getItem('user').length>90){
        return true;
      }
    }
  }

  logoutUser(){
    localStorage.removeItem('user');
    this.router.navigate(['/user']);
  }

}

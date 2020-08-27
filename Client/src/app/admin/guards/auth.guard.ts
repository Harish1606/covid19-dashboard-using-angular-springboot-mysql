import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,private _service:LoginService){}

  canActivate():boolean{
    if(this._service.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/admin/login']);
      return false;
    }
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _service:RegistrationService,private router:Router){}

  canActivate():boolean{
    if(this._service.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/buisness/login']);
      return false;
    }
  }

}

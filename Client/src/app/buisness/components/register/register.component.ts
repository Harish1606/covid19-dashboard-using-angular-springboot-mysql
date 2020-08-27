import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../modules/user';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private _service:RegistrationService) { }

  user=new User();
  message='';

  loading=false;
  ngOnInit(): void {
  }

  registerUser(){
    this.loading=true;
    this._service.register(this.user).subscribe(
      data=>{
        this.loading=false;
        localStorage.setItem("buisness",data.jwt);
        this.router.navigate(['/buisness/home']);
      },
      error=>{
        this.loading=false;
        this.message="User with this emailid already exists";
      }
    )
  }

}

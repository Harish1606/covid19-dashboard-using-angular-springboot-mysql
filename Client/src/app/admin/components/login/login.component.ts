import { Component, OnInit } from '@angular/core';
import { Admin } from '../../modules/admin';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router,private _service:LoginService) { }

  admin=new Admin();
  message='';
  loading=false;
  ngOnInit(): void {
  }

  loginAdmin(){
    this.loading=true;
    this._service.login(this.admin).subscribe(
      data=>{
        this.loading=false;
        localStorage.setItem('admin',data.jwt);
        this.router.navigate(['/admin/home']);
      },
      error=>{
        this.loading=false;
        this.message="Please enter valid username and password";
      }
    )
  }
}

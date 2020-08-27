import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { IndiaComponent } from './components/india/india.component';
import { TamilnaduComponent } from './components/tamilnadu/tamilnadu.component';
import { EpassComponent } from './components/epass/epass.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent,
    children:[
      {
        path:'home',
        component:HomeComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'india',
        component:IndiaComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'tamilnadu',
        component:TamilnaduComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'epass',
        component:EpassComponent,
        canActivate:[AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { EditComponent } from './components/edit/edit.component';
import { IndiaComponent } from './components/india/india.component';
import { TamilnaduComponent } from './components/tamilnadu/tamilnadu.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { EpassComponent } from './components/epass/epass.component';
import { EpassaddComponent } from './components/epassadd/epassadd.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'home',
        component:HomeComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'edit',
        component:EditComponent,
        canActivate:[AuthGuard]
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
        path:'add',
        component:AddComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'update/:id',
        component:UpdateComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'epass',
        component:EpassComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'epassadd',
        component:EpassaddComponent,
        canActivate:[AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

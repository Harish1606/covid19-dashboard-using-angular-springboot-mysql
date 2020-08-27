import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { BuisnessComponent } from './buisness/buisness.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'buisness',
    component:BuisnessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

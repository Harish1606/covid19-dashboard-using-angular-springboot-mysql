import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';
import { AdminRoutingModule } from './admin.routing';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { IndiaComponent } from './components/india/india.component';
import { TamilnaduComponent } from './components/tamilnadu/tamilnadu.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { EpassComponent } from './components/epass/epass.component';
import { EpassaddComponent } from './components/epassadd/epassadd.component';

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    LoginComponent,
    DashboardCardComponent,
    IndiaComponent,
    TamilnaduComponent,
    EditComponent,
    AddComponent,
    UpdateComponent,
    EpassComponent,
    EpassaddComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    GoogleChartsModule
  ],
  providers: [LoginService,AuthGuard]
})
export class AdminModule { }

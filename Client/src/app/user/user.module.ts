import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { UserRoutingModule } from './user.routing';
import { UserComponent } from "./user.component";
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegistrationService } from './services/registration.service';
import { AuthGuard } from './guards/auth.guard';
import { IndiaComponent } from './components/india/india.component';
import { TamilnaduComponent } from './components/tamilnadu/tamilnadu.component';
import { RouterModule } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { EpassComponent } from './components/epass/epass.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    IndiaComponent,
    TamilnaduComponent,
    DashboardCardComponent,
    EpassComponent
  ],
  imports: [
    BrowserModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    GoogleChartsModule
  ],
  providers: [RegistrationService,AuthGuard]
})
export class UserModule { }

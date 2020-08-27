import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { BuisnessModule } from './buisness/buisness.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    HttpClientModule,
    BuisnessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

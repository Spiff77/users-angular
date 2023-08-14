import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SuvCarComponent } from './suv-car/suv-car.component';
import { GeneralCarComponent } from './general-car/general-car.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AddUserReactiveComponent } from './add-user-reactive/add-user-reactive.component';
import { AddUserTemplateComponent } from './add-user-template/add-user-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component';


@NgModule({
  declarations: [
    AppComponent,
    SuvCarComponent,
    GeneralCarComponent,
    UsersComponent,
    HomeComponent,
    MenuComponent,
    UserComponent,
    PageNotFoundComponent,
    AddUserReactiveComponent,
    AddUserTemplateComponent,
    ColorComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

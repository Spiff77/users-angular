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
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserCardComponent } from './user-card/user-card.component';
import { StaticUsersComponent } from './static-users/static-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavAnimalFormComponent } from './fav-animal-form/fav-animal-form.component';
import { AnimalFavDialogComponent } from './animal-fav-dialog/animal-fav-dialog.component';
import { SharedModule } from './shared.module'; 

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
    ColorComponent,
    UserDashboardComponent,
    UserCardComponent,
    StaticUsersComponent,
    FavAnimalFormComponent,
    AnimalFavDialogComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

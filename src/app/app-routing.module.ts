import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuvCarComponent } from './suv-car/suv-car.component';
import { GeneralCarComponent } from './general-car/general-car.component';
import { UsersComponent } from './users/users.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { AddUserReactiveComponent } from './add-user-reactive/add-user-reactive.component';
import { AddUserTemplateComponent } from './add-user-template/add-user-template.component';


const routes: Route[] = [
  {path:'suv', component: SuvCarComponent},
  {path:'general', component: GeneralCarComponent},
  {path:'users/add/reactive', component: AddUserReactiveComponent},
  {path:'users/add/template', component: AddUserTemplateComponent},
  {path:'users', component: UsersComponent},
  {path:'users/:id', component: UserComponent},
  {path:'home', component: HomeComponent},
  {path:'', redirectTo: "home", pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent},
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

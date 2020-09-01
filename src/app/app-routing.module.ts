import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ShowPeopleListComponent } from './show-people-list/show-people-list.component';
import { AuthGuard } from './auth.guard';
import { NoFoundComponent } from './no-found/no-found.component';


const routes: Routes = [

  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "people-list",
    component: PeopleListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-user",
    component: AddUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "update-user/:id",
    component: UpdateUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "show-user/:id",
    component: ShowPeopleListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    component: NoFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

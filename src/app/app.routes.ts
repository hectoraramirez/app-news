import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthuserGuard } from './guards/authuser.guard';


import { RecoverpassComponent } from './pages/recoverpass/recoverpass.component';
import { CreateuserComponent } from './pages/createuser/createuser.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';
import { CategoryComponent } from './pages/category/category.component'


const routes: Routes =[
  {path: 'login', component: LoginComponent},
  {path: 'home' , component: HomeComponent, canActivate: [AuthuserGuard]},
  {path: 'terminosycondiciones', component: PrivacyComponent},
  {path: 'registro', component: CreateuserComponent},
  {path: 'recuperarpass', component: RecoverpassComponent},
  {path: 'category/:cat', component: CategoryComponent},
  {path: '**', redirectTo: '/login'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutes {}

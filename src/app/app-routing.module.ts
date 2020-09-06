import { UpadteDashboardComponent } from './../../../mytask/src/app/upadte-dashboard/upadte-dashboard.component';
import { LoginComponent } from './../../../mytask/src/app/login/login.component';
import { DashboardComponent } from './../../../mytask/src/app/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  {path: 'updatedetails', component: UpadteDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


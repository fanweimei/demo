import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { RulerComponent } from './ruler/ruler.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'ruler', component: RulerComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

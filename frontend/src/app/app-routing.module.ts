import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { StatusComponent } from './pages/status/status.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginSignupComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'status', component: StatusComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

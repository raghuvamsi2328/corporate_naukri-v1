import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { FormsComponent } from './components/forms/forms.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { StatusComponent } from './pages/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TrackerComponent,
    FormsComponent,
    DashboardComponent,
    LoginSignupComponent,
    LandingComponent,
    UserDetailsComponent,
    PaymentComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

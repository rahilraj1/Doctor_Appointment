import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SecondComponentComponent } from './second-component/second-component.component';
import { JobsComponent } from './jobs/jobs.component';
import { TeamComponent } from './team/team.component';
import { TrustedComponent } from './trusted/trusted.component';
import { FooterComponent } from './footer/footer.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'angular-calendar';
import {MatInputModule} from '@angular/material/input';
import { ContactComponent } from './contact/contact.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SecondComponentComponent,
    JobsComponent,
    TeamComponent,
    TrustedComponent,
    FooterComponent,
    ServicepageComponent,
    ContactComponent,
    FirstPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,MatInputModule,CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

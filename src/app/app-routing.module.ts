import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { ContactComponent } from './contact/contact.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {path:'login',component:FirstPageComponent},
  {path:'admin',component:AdminPageComponent},
  {path:'',component:HomeComponent},
  {path:'services',component:ServicepageComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

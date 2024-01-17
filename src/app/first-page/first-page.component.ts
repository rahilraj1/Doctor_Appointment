import { Component } from '@angular/core';
import { ServeService } from '../Services/serve.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.less']
})
export class FirstPageComponent {
  isSign:boolean=false;
  isAdmin:boolean=false;
  isLogin:boolean=false
  onSignUp()
  {
    this.isSign=true;
  }
  onLogIn()
  {
    this.isSign=false;
    this.isLogin=true;
  }
  onAdmin()
  {
    this.isAdmin=true;
    this.isLogin=false;
  }
  constructor(public dark:ServeService){}
}

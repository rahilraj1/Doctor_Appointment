import { Component } from '@angular/core';
import { ServeService } from '../Services/serve.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  isLogin:boolean=true;
  isMenu:boolean=false;
  isDark:boolean=true;
  constructor(private dark:ServeService)
  {
      this.isDark=this.dark.isDark;
  }

  onDarkClick()
  {
     this.dark.onDark()
     this.isDark=this.dark.isDark;
  }
  onLogin()
  {
     this.isLogin=!this.isLogin;
  }
  onMenu()
  {
     this.isMenu=!this.isMenu
  }
}

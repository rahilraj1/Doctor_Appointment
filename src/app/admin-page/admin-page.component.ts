import { Component } from '@angular/core';
import { ServeService } from '../Services/serve.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent {
  constructor(public dark:ServeService){}
  isDark=false;
  onDark()
  {
    this.dark.onDark()
    this.isDark=this.dark.isDark
  }
}

import { Component } from '@angular/core';
import { ServeService } from '../Services/serve.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.component.html',
  styleUrls: ['./servicepage.component.less']
})
export class ServicepageComponent {
   cards:Array<any>=[1,2,3,4,5,6,7,8,9]
   constructor(public dark:ServeService){}
}

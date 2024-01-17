import { Component } from '@angular/core';
import { ServeService } from '../Services/serve.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.less']
})
export class SecondComponentComponent {
  constructor(public dark:ServeService)
  {

  }
}

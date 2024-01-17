import { Component} from '@angular/core';
import { ServeService } from '../Services/serve.service';
declare var $: any;
@Component({
  selector: 'app-trusted',
  templateUrl: './trusted.component.html',
  styleUrls: ['./trusted.component.less']
})
export class TrustedComponent
{
 constructor(public dark:ServeService){} 
}

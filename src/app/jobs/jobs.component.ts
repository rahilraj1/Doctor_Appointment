import { Component } from '@angular/core';
import { ServeService } from '../Services/serve.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.less']
})
export class JobsComponent 
{
    cards:Array<any>=
    [
      {
        imgUrl:'../../assets/Container (1).png',
        heading:'Dental Treatments'
      },
      {
        imgUrl:'../../assets/Container (2).png',
        heading:'Bones Treatments'
      },
      {
        imgUrl:'../../assets/Container (3).png',
        heading:'Diagnosis'
      },
      {
        imgUrl:'../../assets/Container (4).png',
        heading:'Cardiology'
      },
      {
        imgUrl:'../../assets/Container (5).png',
        heading:'Surgery'
      },
      {
        imgUrl:'../../assets/Container (6).png',
        heading:'Eye Care'
      }
    ]
    constructor(public dark:ServeService){}
}

import { Component } from '@angular/core';
import { ServeService } from '../Services/serve.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent {
  
  data: Array<any> = [
    {
      imgUrl: '../../assets/BG.svg',
      name: 'John Carter',
      profile: 'CEO &CO-FOUNDER'
    },
    {
      imgUrl: '../../assets/BG (1).svg',
      name: 'Sophie Moore',
      profile: 'Dental specialist'
    },
    {
      imgUrl: '../../assets/BG (2).svg',
      name: 'Matt Cannon',
      profile: 'Orthopedic'
    },
    {
      imgUrl: '../../assets/BG (3).svg',
      name: 'Andy Smith',
      profile: 'Brain Surgeon'
    },
    {
      imgUrl: '../../assets/BG (4).svg',
      name: 'Lily Woods',
      profile: 'Heart Specialist'
    },
    {
      imgUrl: '../../assets/BG (5).svg',
      name: 'Patrick Meyer',
      profile: 'Eye Specialist'
    },
  ]

  constructor(public dark:ServeService){}
}

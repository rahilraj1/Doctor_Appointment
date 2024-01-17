import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
 
      isDark:boolean=true;
      onDark()
      {
          this.isDark=!this.isDark
      }
  constructor() { }
}

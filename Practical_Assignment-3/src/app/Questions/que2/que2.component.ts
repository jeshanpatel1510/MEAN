import { Component } from '@angular/core';

@Component({
  selector: 'app-que2',
  templateUrl: './que2.component.html',
  styleUrls: ['./que2.component.css']
})
export class Que2Component {
  series : {
    name : string,
    cast1 : string,
    cast2 : string,
    episodes : number
  }[] = [];

  constructor()
  {
    this.series = [
      {
        name : "2Gether",
        cast1 : "Tine",
        cast2 : "Sarawat",
        episodes : 13
      },
      {
        name : "Bad Buddy",
        cast1 : "Pran",
        cast2 : "Pat",
        episodes : 12
      },      {
        name : "Dark Blue Kiss",
        cast1 : "Pete",
        cast2 : "Kao",
        episodes : 12
      },      {
        name : "Sementic Error",
        cast1 : "Jae Young",
        cast2 : "Chu Sang",
        episodes : 1
      },      {
        name : "You Make Me Dance",
        cast1 : "Mr. Seok",
        cast2 : "Song Shi",
        episodes : 1
      },
    ];
    console.log(this.series);
    
  }
}

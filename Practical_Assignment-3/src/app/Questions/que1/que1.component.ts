import { Component } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component {
  rollno : number = 0;
  name : string = "";
  bdate : any = new Date();

  constructor()
  {
    this.rollno = 45;
    this.name = "Jeshan Patel";
    this.bdate = new Date(2002, 10, 15);
  }
}

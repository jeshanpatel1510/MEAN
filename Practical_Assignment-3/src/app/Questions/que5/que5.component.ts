import { Component } from '@angular/core';

@Component({
  selector: 'app-que5',
  templateUrl: './que5.component.html',
  styleUrls: ['./que5.component.css']
})
export class Que5Component {
  name = "";
  email = "";
  mobile = "";
  city = "";
  output : boolean = false;

  onFormSubmit(event : any)
  {
    this.name = event.target.name.value;
    this.email = event.target.email.value;
    this.mobile = event.target.mobile.value;
    this.city = event.target.city.value;
    this.output = true;
  }
}

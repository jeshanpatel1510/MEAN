import { Component } from '@angular/core';

@Component({
  selector: 'app-que4',
  templateUrl: './que4.component.html',
  styleUrls: ['./que4.component.css']
})
export class Que4Component {
  text_box: boolean = false;
  text_area: boolean = false;
  text = "";
  area = "";
  value = "";

  onSelectChange(value: any) {
    if (value === "input") {
      this.text_box = true;
      this.text_area = false;
    }
    else if (value === "textarea") {
      this.text_box = false;
      this.text_area = true;
    }
  }

  getValue(value:any) {
    this.value = "Value = "+value;
  }
}

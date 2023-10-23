import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Practical Assignment 3';
  subject = "701 - MEAN";
  name = "Jeshan Patel";
  rollno = "45";
  cineWorld = "";
}

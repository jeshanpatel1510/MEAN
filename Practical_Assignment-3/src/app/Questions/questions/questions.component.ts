import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  que1 : boolean = false;
  que2 : boolean = false;
  que3 : boolean = false;
  que4 : boolean = false;
  que5 : boolean = false;

  questions = {
    
  }

  buttonClick(id : string){
    if(id==="que1")
    {
      console.log("Question 1");
      this.que1 = true;
      this.que2 = false;
      this.que3 = false;
      this.que4 = false;
      this.que5 = false;
    } 
    else if(id === "que2")
    {
      console.log("Question 2");
      this.que1 = false;
      this.que2 = true;
      this.que3 = false;
      this.que4 = false;
      this.que5 = false;
    } 
    else if(id === "que3")
    {
      console.log("Question 3");
      this.que1 = false;
      this.que2 = false;
      this.que3 = true;
      this.que4 = false;
      this.que5 = false;
    } 
    else if(id === "que4")
    {
      console.log("Question 4");
      this.que1 = false;
      this.que2 = false;
      this.que3 = false;
      this.que4 = true;
      this.que5 = false;
    } 
    else if(id === "que5")
    {
      console.log("Question 5");
      this.que1 = false;
      this.que2 = false;
      this.que3 = false;
      this.que4 = false;
      this.que5 = true;
    } 
    else 
    {
      console.log("Cart App");
    }
  }
}

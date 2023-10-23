import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddContentService } from '../Services/add-content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent {
  form : FormGroup;
  imagedata = "";

  constructor(public add : AddContentService, private router : Router){
    this.form = new FormGroup({
      name : new FormControl(null),
      cast1 : new FormControl(null),
      cast2 : new FormControl(null),
      episodes : new FormControl(null),
      aired : new FormControl(null),
      poster : new FormControl(null)
    });
  }

  addContent()
  {
    console.log(this.form.value.poster);
    
    this.add.createContent(this.form, this.form.value.poster).subscribe((response)=>{
      this.router.navigate(['cineworld']);
    })
    
  }
  fileUpload(event: { target: HTMLInputElement })
  {
    const file = event.target.files[0];
    this.form.patchValue({poster : file});

    const reader = new FileReader();
    reader.onload = (event: ProgressEvent) =>{
      this.imagedata = reader.result as string;
    }
    reader.readAsDataURL(file);
  }
}

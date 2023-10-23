import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Content from '../models/Content';
import { EditContentService } from '../Services/edit-content.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent {
  id : String;
  content : Content[] = [];
  form : FormGroup;
  constructor(public edit : EditContentService, private router : Router, private route : ActivatedRoute){
    this.form = new FormGroup({
      _id : new FormControl(this.id),
      Name : new FormControl(null),
      Cast1 : new FormControl(null),
      Cast2 : new FormControl(null),
      Episodes : new FormControl(null),
      Aired : new FormControl(null),
      Poster : new FormControl(null),
    })
  }
  ngOnInit(): void {  
    this.getContent();                               
  }
  
  getContent(){
    this.route.params.subscribe((param : any)=>{
      this.edit.getData(param["id"]).subscribe((res:any)=>{
        this.content = res;
        this.form.patchValue({_id : param["id"]});
      });
    });
  }

  editContent()
  {
    this.edit.editData(this.id, this.form, this.form.value.Poster).subscribe((res)=>{
      this.router.navigate(['cineworld']);
    })
  }

  onImageChange(event : Event)
  {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({Poster : file});
  }
}

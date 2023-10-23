import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetContentsService } from '../Services/get-contents.service';
import Content from '../models/Content';
import { RemoveContentService } from '../Services/remove-content.service';

@Component({
  selector: 'app-get-content',
  templateUrl: './get-content.component.html',
  styleUrls: ['./get-content.component.css']
})
export class GetContentComponent {
    content : Content[] = [];

    constructor(private http : HttpClient, public getContent : GetContentsService, public removeContent : RemoveContentService){}
    ngOnInit() : void{
      this.getContents();
    }
    getContents() {
      this.getContent.getData().subscribe((response : any)=>{
        response.forEach(element => {
          let date = new Date(element.Aired).toString().substring(0, 15);
          element.Aired = date;
        });
        this.content = response;
      },
      (error)=>{
        console.log(error);
      })
    }

    deleteContent(id : any)
    {
      this.removeContent.removeContent(id).subscribe((response)=>{
        this.ngOnInit();
      })
    }

    addWatchlist(id : any)
    {
      console.log("Id : "+id);
      
      this.getContent.addToWatchList(id).subscribe((res)=>{
        console.log(res);
        
        if(res === "OK")
        {
          alert("Added To WatchList!!");
        }
      })
    }
}

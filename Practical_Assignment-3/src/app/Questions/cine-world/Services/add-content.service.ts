import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddContentService {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  createContent(obj : any, file : File) : Observable<any>{
    
    const content = new FormData();
    content.append("name", obj.value.name);
    content.append("cast1", obj.value.cast1);
    content.append("cast2", obj.value.cast2);
    content.append("episodes", obj.value.episodes);
    content.append("aired", obj.value.aired);
    content.append("poster", file);
    content.forEach((elemet)=>{
      console.log(elemet);
      
    })
    
    return this.http.post("http://localhost:8080/create", content, {responseType:"text"});
  }
}

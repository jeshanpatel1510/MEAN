import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditContentService {

  constructor(private Http : HttpClient) { }
  ngOnInit(): void {}

  getData(id : any) : Observable<any>{
    return this.Http.get(`http://localhost:8080/edit/${id}`);
  }

  editData(id : any, obj : any, file : File) : Observable<any>
  {
    const content = new FormData();
    content.append("name", obj.value.Name);
    content.append("cast1", obj.value.Cast1);
    content.append("cast2", obj.value.Cast2);
    content.append("episodes", obj.value.Episodes);
    content.append("aired", obj.value.Aired);
    content.append("poster", file);

    return this.Http.post(`http://localhost:8080/edit/${obj.value._id}`, content, {responseType:"text"});
  }
}

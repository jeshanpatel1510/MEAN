import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoveContentService {

  constructor(private http: HttpClient) { }
  ngOnInit() : void{

  }
  removeContent(id : any) : Observable<any>{
    return this.http.get(`http://localhost:8080/delete/${id}`, {responseType : 'text'});
  }
}

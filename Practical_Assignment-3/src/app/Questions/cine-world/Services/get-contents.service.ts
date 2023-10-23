import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetContentsService implements OnInit {

  constructor(private http : HttpClient) { }
  
  ngOnInit(): void {
    
  }
  getData(): Observable<any> {
    return this.http.get('http://localhost:8080/cineworld').pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  addToWatchList(record : any) : Observable<any>
  {
    console.log("Id : "+record);
    
    return this.http.post(`http://localhost:8080/add-watchlist/${record}`, record, {responseType:"text"});
  }
}

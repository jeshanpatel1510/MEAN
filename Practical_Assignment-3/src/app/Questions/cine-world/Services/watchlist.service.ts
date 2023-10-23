import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  getWatchListId() : Observable<any>{
    console.log("getWatchListId");
    
    return this.http.get("http://localhost:8080/watchlist");
  }

  getWatchList(id : any) : Observable<any>{
    console.log("getWatchList");
    return this.http.get(`http://localhost:8080/content/${id}`);
  }

  removeWatchList(id : any) : Observable<any>{
    return this.http.get(`http://localhost:8080/remove-watchlist/${id}`, {responseType:"text"});
  }

  removeAll(): Observable<any>{
    return this.http.get("http://localhost:8080/remove-watchlist", {responseType:"text"});
  }
}

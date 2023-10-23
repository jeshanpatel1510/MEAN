import { Component, OnInit } from '@angular/core';
import Content from '../models/Content';
import { WatchlistService } from '../Services/watchlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  content : Content[] = [];
  total : Number = 0;

  constructor(public watchlist : WatchlistService, private router : Router){}

  ngOnInit(): void {
    this.getWatchlist();
  }

  getWatchlist()
  {
    this.watchlist.getWatchListId().subscribe((res)=>{
      let count = 0;
      for (let index = 0; index < res.length; index++) {
        this.watchlist.getWatchList(res[index].WatchListId).subscribe((resp)=>{
          let date = new Date(resp[0].Aired).toString().substring(0, 15);
          resp[0].Aired = date;
          count = count + resp[0].Episodes;
          this.content.push(resp[0]);
          this.total = count;
        })
        
      }
    })
  }

  removeContent(id : any)
  {
    this.watchlist.removeWatchList(id).subscribe((res)=>{
      this.ngOnInit();
    })
  }

  removeAll(){
    this.watchlist.removeAll().subscribe(()=>{
      this.ngOnInit();
    })
  }
}

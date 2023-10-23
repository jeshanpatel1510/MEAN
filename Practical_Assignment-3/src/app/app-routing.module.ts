import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CineWorldComponent } from './Questions/cine-world/cine-world.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddContentComponent } from './Questions/cine-world/add-content/add-content.component';
import { EditContentComponent } from './Questions/cine-world/edit-content/edit-content.component';
import { WatchlistComponent } from './Questions/cine-world/watchlist/watchlist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path : 'cineworld',
    component : CineWorldComponent
  },
  {
    path : 'cineworld/create',
    component : AddContentComponent
  },
  {
    path : 'cineworld/edit/:id',
    component : EditContentComponent
  },
  {
    path : 'cineworld/watchlist',
    component : WatchlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

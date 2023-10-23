import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './Questions/questions/questions.component';
import { Que1Component } from './Questions/que1/que1.component';
import { Que2Component } from './Questions/que2/que2.component';
import { Que3Component } from './Questions/que3/que3.component';
import { Que4Component } from './Questions/que4/que4.component';
import { Que5Component } from './Questions/que5/que5.component';
import { CineWorldComponent } from './Questions/cine-world/cine-world.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GetContentComponent } from './Questions/cine-world/get-content/get-content.component';
import { AddContentComponent } from './Questions/cine-world/add-content/add-content.component';
import { EditContentComponent } from './Questions/cine-world/edit-content/edit-content.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { WatchlistComponent } from './Questions/cine-world/watchlist/watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    Que1Component,
    Que2Component,
    Que3Component,
    Que4Component,
    Que5Component,
    CineWorldComponent,
    HeaderComponent,
    HomeComponent,
    GetContentComponent,
    AddContentComponent,
    EditContentComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(allIcons, {
      width : "1.5rem",
      height : "1.5rem"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

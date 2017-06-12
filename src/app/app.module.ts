import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Search} from './search.service';
import {genreservice} from './genre.service';
import { RouterModule } from  '@angular/router';
import { FavouriteComponent } from './favourite.component';


@NgModule({ 
   providers:[Search,genreservice],

    declarations: [
    AppComponent, SearchComponent, FavouriteComponent
  ],
  imports: [
    BrowserModule,InfiniteScrollModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'search',
      pathMatch: 'full'
    },
      {
      path: 'search',
      component: SearchComponent
    },
    {
      path: 'favourite',
      component: FavouriteComponent
    }

    ])
  ],
 
  bootstrap: [AppComponent]
  
})
export class AppModule { }


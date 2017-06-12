import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class Search {

 page=1;
  
  constructor(private jsonp:Jsonp){

  }
  search(query:string) {
    
      let url = 'https://api.themoviedb.org/3/search/movie?api_key=41c3e8b026cfefb321cc61f47f2fe9ba&language=en-US&page='+this.page+'&include_adult=false&query='+query+'&callback=JSONP_CALLBACK';
      return this.jsonp.get(url).map(data=> data.json());
      
    

    
   
  }
}
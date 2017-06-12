
import { Injectable } from '@angular/core';
import {Headers,RequestOptions} from '@angular/http';
// import { AppComponent } from './app.component';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()


export class genreservice {

//  page=1;
  
  constructor(private http:Http){

  }
 getgenre() {
    
      let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=41c3e8b026cfefb321cc61f47f2fe9ba&language=en-US';
      return this.http.get(url).map((response:Response)=>response.json());
      
    

    
   
  }

  addFav(movie) {
    const url=`http://localhost:4200/`
      console.error(JSON.stringify(movie));

    return this.http.post(url,movie);
  }

  getMovies() {
    const url=`http://localhost:4200/`;
    return this.http.get(url).map(res => res.json());
  }

  deleting(id){
    const url=`http://localhost:4200/${id}`;
    return this.http.delete(url).map(res=>res.json());


  }
  updateFavourites(data){
    let headers= new Headers({'Content-Type':'application/json;charset=utf-8'});
    let options=new RequestOptions({headers:headers});
     let url="http://localhost:4200/";
    return this.http.put(`${url}${data.id}`,data,headers).map(res=>res.json());
  }
}
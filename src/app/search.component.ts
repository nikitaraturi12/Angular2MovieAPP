import { Component } from '@angular/core';
import{ Jsonp} from '@angular/http';
import{genreservice} from'./genre.service';
import {Search} from './search.service';

 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[Search,genreservice]
})
export class SearchComponent {
  title = 'app works!';
  query:string;
  movies:any[];
 scrollDistance = 2;
 page=1;
 totalpage:number;
 genreResults:any[];
 
  
   constructor(private _Search:Search,private _genre:genreservice){
 }
  search() {
    this._Search.search(this.query).subscribe(res=>{this.movies=res.results;this.totalpage=res.total_pages;
    
  });
  
    this._genre.getgenre().subscribe(res=>this.genreResults=res.genres);
    
  
  }
  genre(genreid){

  let convertedData = [];
  this.genreResults.forEach(function(data){
    
      if(genreid.includes(data.id)){
        convertedData.push(data.name);

      }
    })

  
return convertedData;
 }


 onScroll(query) {
   if(this._Search.page<=this.totalpage){
     this._Search.page++;
      this._Search.search(this.query).subscribe(res=>{res.results.forEach((res) => {
        this.movies.push(res);

      })}
      );


   }
   
  }
addToFav(movie) {
  // alert(movie);
  // alert(JSON.stringify(movie));
  console.error(JSON.stringify(movie));
   this._genre.addFav(movie).subscribe(data => {console.log(data);});
 }



}


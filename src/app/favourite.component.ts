import {Component,OnInit} from '@angular/core';
import{ genreservice } from'./genre.service';


@Component({
    selector: 'app-favourite',
    templateUrl: 'favourite.component.html',
     styleUrls: ['favourite.component.css']
     

})
export class FavouriteComponent implements OnInit{
    moviedata=[];
     genreResults=[];
     constructor(private genre: genreservice){
          this.genre.getgenre().subscribe(res=>this.genreResults=res.genres);
          this.genre.getMovies().subscribe(data => {this.moviedata = data});
     }
     title: 'hi';
ngOnInit(){
  
    
}
genreId(genreid){

  let convertedData = [];
  this.genreResults.forEach(function(data){
    
      if(genreid.includes(data.id)){
      convertedData.push(data.name);
      

      }
    })
return convertedData;
}

deleteMovie(id) {
  this.genre.deleting(id).subscribe( data =>{ this.moviedata = data; })
}


updateMovie(moviedata,rate){
  console.log(moviedata);
   console.log("rating from text : ",rate);
  moviedata.vote_average=rate;
  console.log(moviedata);
  this.genre.updateFavourites(moviedata).subscribe(data=>{
    
    alert("updated");
  });

}
}

import { Component } from '@angular/core';
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent {

  popularList: Array<Object>;
  theatersList:Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private _movieservice: MovieService){

    this._movieservice.getPopular().subscribe( res => {
      // console.log(res.results);
      this.popularList = res.results;
    });

    this._movieservice.getInTheaters().subscribe( res => {
      //console.log(res.results);
      this.theatersList = res.results;
    });
  }

  searchMovies(){

    this._movieservice.searchMovies(this.searchStr).subscribe(res => {
      console.log(res.results);
      this.searchRes = res.results;
    });
    //console.log(this.searchRes);
  }


}

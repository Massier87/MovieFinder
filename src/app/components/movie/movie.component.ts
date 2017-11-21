import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent implements OnInit{

  movie: Object;

  constructor(
    private _movieservice: MovieService,
    private router: ActivatedRoute){


  }

  ngOnInit(){

      this.router.params.subscribe((params) => {
        let id = params['id'];
        this._movieservice.getMovie(id).subscribe(movie => {
          this.movie = movie;
        })
      })

  }

}




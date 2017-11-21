import {Injectable} from "@angular/core";
import {Jsonp} from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService{

  apikey: string;

  constructor(private _jsonp:Jsonp){
    this.apikey = 'API_KEY';
    console.log('Movie Service Initialzied...');
  }

  getPopular(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
      .map(res => res.json());
  }

  getInTheaters(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-10-15&primary_release_date.lte=2017-11-30&api_key='+this.apikey)
      .map(res => res.json());
  }

  searchMovies(searchStr: string){
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+ searchStr +'&sort_by=popularity.desc&api_key='+this.apikey)
      .map(res => res.json());
  }

  getMovie(id:string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
    //return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+id+'api_key='+this.apikey)
      .map(res => res.json());
  }
}

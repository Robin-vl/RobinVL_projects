import { Router } from '@angular/router';
import { Films } from './../films';
import { Component } from '@angular/core';
import { FilmsService } from '../moviesearch.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: FilmsService) {};

  public movies: Films[] =[];
  searchMovie(movie:string){
    this.service.getMovies(movie).subscribe(data =>{
      this.movies = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
import { IPopularMovieResponse } from 'src/app/movies-search/interfaces/popular-movie-response.interface';

@Component({
  selector: 'app-movie-detail-controller',
  templateUrl: './movie-detail-controller.component.html',
  styleUrls: ['./movie-detail-controller.component.scss']
})
export class MovieDetailControllerComponent implements OnInit {

  movieData: IPopularMovieResponse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMovieData();
  }

  getMovieData() {
    let movieId = this.activatedRoute.snapshot.params['id'];
    if(movieId) {
      this.moviesService.getMovieDetailsById(movieId).subscribe(
        (res: IPopularMovieResponse) => {
          this.movieData = res;
          this.movieData.poster_path = this.moviesService.getMoviePosterUrl() + this.movieData.poster_path;
          this.movieData.backdrop_path = this.moviesService.getMoviePosterUrl() + this.movieData.backdrop_path;
          console.log(this.movieData);
        },
        (error) => {
          console.log(error);
        }
      )
    } else {
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    }

  }



}

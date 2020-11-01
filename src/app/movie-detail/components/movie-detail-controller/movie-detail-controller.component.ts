import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
import { IPopularMovieResponse } from 'src/app/movies-search/interfaces/popular-movie-response.interface';
import { IMovieCredits } from 'src/app/shared/interfaces/movie-credits.interface';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'app-movie-detail-controller',
  templateUrl: './movie-detail-controller.component.html',
  styleUrls: ['./movie-detail-controller.component.scss']
})
export class MovieDetailControllerComponent implements OnInit {

  movieId: number;
  movieData: IPopularMovieResponse;
  movieCredits: IMovieCredits;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private moviesService: MoviesService,
    private router: Router,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.params['id'];
    this.getMovieData(this.movieId);
    this.getMovieCredits(this.movieId);
  }

  getMovieData(movieId: number) {
    
    if(movieId) {
      this.moviesService.getMovieDetailsById(movieId).subscribe(
        (res: IPopularMovieResponse) => {
          this.movieData = res;
          this.movieData.poster_path = this.moviesService.getMoviePosterUrl() + this.movieData.poster_path;
          this.movieData.backdrop_path = this.moviesService.getMoviePosterUrl() + this.movieData.backdrop_path;
        },
        (error) => {
          this.uiService.showSnackBar(error, 'error');
          this.router.navigate(['../../home'], { relativeTo: this.activatedRoute });
        }
      )
    } else {
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    }

  }

  getMovieCredits(movieId: number) {
    this.moviesService.getMovieCredits(movieId).subscribe(
      (res: IMovieCredits) => {
        this.movieCredits = res;
        console.log(this.movieCredits);
      },
      (error) => {

      }
    );
  }



}

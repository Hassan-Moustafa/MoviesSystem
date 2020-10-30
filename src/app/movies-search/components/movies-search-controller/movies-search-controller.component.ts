import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { IMovieCardData } from 'src/app/shared/interfaces/movie-card-data.interface';
import { IPopularMovieResponse } from '../../interfaces/popular-movie-response.interface';
import { IPagedListResult } from 'src/app/shared/interfaces/paged-list-result.interface';

@Component({
  selector: 'app-movies-search-controller',
  templateUrl: './movies-search-controller.component.html',
  styleUrls: ['./movies-search-controller.component.scss']
})
export class MoviesSearchControllerComponent implements OnInit {
  moviesData: IMovieCardData[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe((response: IPagedListResult) => {
      response.results.forEach((item: IPopularMovieResponse) => {
        this.moviesData.push({
          image: `https://image.tmdb.org/t/p/w300/${item.poster_path}`,
          mainTitle: item.title,
          subTitle: item.release_date,
          rating: item.vote_average.toString()
        })
      })
    });
  }

}

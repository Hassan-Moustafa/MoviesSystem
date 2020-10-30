import { Component, OnInit, HostListener } from '@angular/core';
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
  currentPage = 1;
  moviesPagedList: IPagedListResult;
  paginationMaxSize = 5;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 450) {
      this.paginationMaxSize = 2;
    } else {
      this.paginationMaxSize = 5;
    }
  }

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }
  
  getPopularMovies() {
    this.moviesService.getPopularMovies(this.currentPage).subscribe((response: IPagedListResult) => {
      this.moviesPagedList = response;
      this.moviesData = [];
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

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.getPopularMovies();
  }

}

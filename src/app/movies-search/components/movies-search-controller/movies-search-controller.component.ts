import { Component, OnInit, HostListener } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { IMovieCardData } from 'src/app/shared/interfaces/movie-card-data.interface';
import { IPopularMovieResponse } from '../../interfaces/popular-movie-response.interface';
import { IPagedListResult } from 'src/app/shared/interfaces/paged-list-result.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'app-movies-search-controller',
  templateUrl: './movies-search-controller.component.html',
  styleUrls: ['./movies-search-controller.component.scss']
})
export class MoviesSearchControllerComponent implements OnInit {
  moviesData: IMovieCardData[] = [];
  currentPage = 1;
  moviesPagedList: IPagedListResult;
  movieName: string;
  isLoading = false;
  


  constructor(
    private moviesService: MoviesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private uiService: UiService) { }

  ngOnInit(): void {
    this.getMoviesList();
  }

  getMoviesList() {
    let movieName = this.activatedRoute.snapshot.queryParams['movieName'];
    this.uiService.setSpinnerStatus(true);
    this.isLoading = true;
    if(movieName) {
      this.movieName = movieName;
      this.searchForMovies(movieName);
    } else {
      this.getPopularMovies();
    }
  }

  handleRetrievedMovies(response: IPagedListResult) {
    this.uiService.setSpinnerStatus(false);
    this.isLoading = false;
    this.moviesPagedList = response;
    this.moviesData = [];
    response.results.forEach((item: IPopularMovieResponse) => {
      this.moviesData.push({
        id: item.id,
        image: `${this.moviesService.getMoviePosterUrl()}${item.poster_path}`,
        mainTitle: item.title,
        subTitle: item.release_date,
        rating: item.vote_average.toString()
      })
    })
  }
  
  getPopularMovies() {
    this.moviesService.getPopularMovies(this.currentPage).subscribe(
      (response: IPagedListResult) => {
      this.handleRetrievedMovies(response);
      },
      (error) => {
        this.uiService.setSpinnerStatus(false);
        this.isLoading = false;
      }
    );
  }

  searchForMovies(movieName: string) {
    this.moviesService.searchForMovie(movieName, this.currentPage).subscribe((response: IPagedListResult) => {
      this.handleRetrievedMovies(response);
    });
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.getMoviesList();
  }

  onMovieItemSelection(selectedMovie: IMovieCardData) {
    this.router.navigate(['../', 'movie-detail', selectedMovie.id], {relativeTo: this.activatedRoute});
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { IMovieCredits } from 'src/app/shared/interfaces/movie-credits.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getPopularMovies(pageNumber: number = 1) {
    const url = this.configService.baseUrl + '/movie/popular';
    let params = new HttpParams();
    params = params.append('page', pageNumber.toString());

    return this.http.get(url, {
      params
    });
  }

  searchForMovie(query: string, pageNumber: number = 1) {
    const url = this.configService.baseUrl + '/search/movie';
    let params = new HttpParams();
    params = params.append('query', query);
    params = params.append('page', pageNumber.toString());

    return this.http.get(url, {
      params
    });
  }

  getMovieDetailsById(movieId: number) {
    const url = this.configService.baseUrl + `/movie/${movieId}`;
    return this.http.get(url);
  }

  getMovieCredits(movieId: number) {
    const url = this.configService.baseUrl + `/movie/${movieId}/credits`;
    return this.http.get(url);
  }

  getMoviePosterUrl() {
    return this.configService.moviePosterBaseUrl;
  }
}

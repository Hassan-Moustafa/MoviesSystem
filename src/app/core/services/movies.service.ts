import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';

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
}

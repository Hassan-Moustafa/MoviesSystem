import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getPopularMovies() {

    const url = this.configService.baseUrl + '/movie/popular';
    return this.http.get(url);
  }
}

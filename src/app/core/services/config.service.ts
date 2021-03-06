import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _baseUrl: string;
  private _moviePosterBaseUrl: string;
  private _token: string;

  private configFilePath = 'assets/config/configurations.json';

  get baseUrl() {
    return this._baseUrl;
  }

  get moviePosterBaseUrl() {
    return this._moviePosterBaseUrl;
  }

  get token() {
    return this._token;
  }

  constructor(private http: HttpClient) { }

  loadConfig() {
    return this.http.get(this.configFilePath).subscribe((res: IAppConfig) => {
      this._baseUrl = res.baseUrl;
      this._moviePosterBaseUrl = res.moviePosterBaseUrl;
      this._token = res.token;
    })
  }
}

interface IAppConfig {
  baseUrl: string;
  moviePosterBaseUrl: string;
  token: string;
}

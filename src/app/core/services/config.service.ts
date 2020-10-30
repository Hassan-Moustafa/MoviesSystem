import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _baseUrl: string;
  private configFilePath = 'assets/config/configurations.json';

  get baseUrl() {
    return this._baseUrl;
  }

  constructor(private http: HttpClient) { }

  loadConfig() {
    return this.http.get(this.configFilePath).subscribe((res: IAppConfig) => {
      this._baseUrl = res.baseUrl;
    })
  }
}

interface IAppConfig {
  baseUrl: string;
}

import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiName = "user";

  constructor(
    private http: HttpClient,
    private config: ConfigService = new ConfigService()
    ) { }

  getData() {
    return this.http.get(`${this.config.api}/${this._apiName}`);
  }

  filterData(name: string) {
    return this.http.get(`${this.config.api}/${this._apiName}/${name}`);
  }

  postData(newData: object): void {
    this.http.post(`${this.config.api}/${this._apiName}`, newData).subscribe(res =>
      console.log(res)
    );
  }
}

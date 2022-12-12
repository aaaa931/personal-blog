import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
  _apiName: string = "postlist";

  constructor(
    private http: HttpClient,
    private config: ConfigService = new ConfigService()
    ) { }

  getData(id: string = "", page: string = "") {
    // console.log(`service id = ${id}, page = ${page}`);
    return this.http.get(`${this.config.api}/${this._apiName}`, {
      params: {
        id: id,
        type: page,
      }
    });
  }

  filterData(id: string = "", page: string = "", label: string) {
    // console.log(`service id = ${id}, page = ${page}`);
    return this.http.get(`${this.config.api}/${this._apiName}/${label}`, {
      params: {
        id: id,
        type: page,
      }
    });
  }
}

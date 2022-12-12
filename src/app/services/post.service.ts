import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  _apiName: string = "post";

  constructor(
    private http: HttpClient,
    private config: ConfigService = new ConfigService(),
    ) { }

  filterData(id: string) {
    return this.http.get(`${this.config.api}/${this._apiName}/${id}`);
  }

  putData = (id: string, data: object) => {
    return this.http.put(`${this.config.api}/${this._apiName}/${id}`, data);
  }

  deleteData = (id: string) => {
    this.http.delete(`${this.config.api}/${this._apiName}/${id}`).subscribe(res => {
      console.log(`post ${id} delete success`);
    });
  }
}

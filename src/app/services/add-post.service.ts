import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {
  _apiName: string = "addpost";

  constructor(
    private http: HttpClient,
    private config: ConfigService = new ConfigService()
    ) { }

  addData(data: object) {
    // return this.http.post(`${this.config.api}/${this._apiName}`, data)
    //   .subscribe(res => {
    //     console.log(res);

    //     return res;
    //   });
    return this.http.post(`${this.config.api}/${this._apiName}`, data);
    console.log(`${this.config.api}/${this._apiName}`)
    console.log(data);
  }
}

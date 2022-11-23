import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class LabelsService {
  _apiName: string = "labels";

  constructor(
    private http: HttpClient,
    private config: ConfigService = new ConfigService()
    ) { }

  getData() {
    return this.http.get(`${this.config.api}/${this._apiName}`);
  }
}

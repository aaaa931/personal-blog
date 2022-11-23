import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  _apiName: string = "todolist";

  constructor(
    private http: HttpClient,
    private config: ConfigService = new ConfigService()
    ) { }

  getData() {
    // return lastValueFrom(this.http.get(`${this.config.api}/${this._apiName}`));
    return this.http.get(`${this.config.api}/${this._apiName}`);
  }
}

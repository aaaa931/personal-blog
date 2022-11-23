import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _api: string = "http://localhost:5001/personal-blog";

  constructor() { }

  get api(): string {
    return this._api;
  }

  set api(newApi: string) {
    if (newApi.trim() != "") {
      this._api = newApi;
    }
  }
}

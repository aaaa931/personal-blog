import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class url {
  constructor(private router: Router) {
  }

  public redirect = () => {
    const isName: boolean = typeof localStorage.getItem("name") === "undefined";

    if (isName) {
      // check user is register, if not => redirect to "/register"
      this.router.navigate(["/register"]);
    }
  }
}

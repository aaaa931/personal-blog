import { url } from './../assets/url';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'personal-blog';
  name: any = localStorage.getItem("name") ? localStorage.getItem("name") : false;
  theme = localStorage.getItem("theme");
  @Output() toggleThemRequest = new EventEmitter<any>();

  constructor(private url: url) {
  }

  ngOnInit(): void {
    this.url.redirect();

    const theme = localStorage.getItem("theme") as string;
    let root = document.getElementById("root");

    if (!theme) {
      this.toggleTheme();
    }

    // root?.classList.add(this.theme as string);
    console.log('ngOnInit');
  }

  toggleTheme() {
    const prevThme = this.theme as string;
    const nextTheme = this.theme === "light-theme" ? "dark-theme" : "light-theme";
    let root = document.getElementById("root");
    this.theme = nextTheme;

    localStorage.setItem("theme", nextTheme);
    // root?.classList.add(nextTheme);
    // root?.classList.remove(prevThme);
    console.log('nextThme', nextTheme);
    console.log(localStorage.getItem("theme"));
  }

  getName() {
    this.name = localStorage.getItem("name");
  }
}

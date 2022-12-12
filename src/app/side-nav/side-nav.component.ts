import { TodolistService } from './../services/todolist.service';
import { LabelsService } from './../services/labels.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  labels$: any = [];
  todolist$: any = [];
  _input: string = "";

  constructor(
    private router: Router,
    private LabelsService: LabelsService,
    private todolistService: TodolistService,
    ) { }

  async ngOnInit() {
    let searchInput = document.getElementById("searchInput");
    this.labels$ = this.LabelsService.getData();
    this.todolist$ = await firstValueFrom(this.todolistService.getData());
    // console.log(`this.labels = ${JSON.stringify(this.labels$)}`);
    // console.log(`this.todolist$ = ${JSON.stringify(this.todolist$)}`);

    document.addEventListener("keyup", e => {
      if (e.ctrlKey && e.key === ";") {
        searchInput?.focus();
      } else if (e.key === "Escape") {
        searchInput?.blur();
      }
    })
  }

  onKey(e: any) {
    this._input = e.target.value;
    console.log(this._input);
  }

  onSubmit() {
    this._input = this._input.trim();

    if (this._input === "") {
      return ;
    } else {
      this.router.navigate([`postlist/${this._input}`]);
      this._input = "";
    }
  }

}

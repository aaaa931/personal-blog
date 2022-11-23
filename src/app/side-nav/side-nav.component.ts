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
  // listCompleted: string[] = ["修改 theme", "quill 測試", "新增 register component", "addpost api 接收資料", "新增 Quill 編輯器，測試 addPost submit 功能", "light theme 背景更換", "查詢功能實作", "postlist API route params", "post api", "user API", "postlist API", "postList", "post at postId", "nav", "sideNav", "切換 theme", "行動裝置查詢功能"];
  // listActive: string[] = ["firebase todolist", "getdata order by timestamp", "post query = edit，反為上一頁處理", "編輯 event", "測試背景在高視窗效果", "驗證 register", "測試 register，驗證暱稱重複", "測試 addpost api", "新增 Quill view html 在 card.component", "手機查詢功能", "測試 user api", "API", "addPost", "rxjs", "angular form", "safe html"];
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
    console.log(this.todolist$)

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

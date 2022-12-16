import { SubmitCheckComponent } from './../submit-check/submit-check.component';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from './../services/post.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post: any;
  @Input() users: any;
  @Input() cardImg: any;
  name: string | null = localStorage.getItem("name");
  user: any;
  isPost: boolean = false;
  isEdit: boolean = false;

  constructor(
    private router: Router,
    private postService: PostService,
    private dialog: MatDialog,
    ) { }

  async ngOnInit() {
    // console.log(`card user = ${JSON.stringify(this.users)}`);
    // console.log(`card post = ${JSON.stringify(this.post)}`);

    this.isPost = this.router.url.includes("/post/") ? true : false;
    this.isEdit = this.router.url.includes("/editpost/") ? true : false;
  }

  getUser() {
    // console.log(`user.name = ${user.name}`);
    // return this.users.find((user: any) => user.name === this.post.owner);
    const result = this.users.find((user: any) => user.name === this.post.owner)
    if (typeof result !== "undefined") {
      return result;
    } else {
      return { name: "未知使用者", avatar: "https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_960_720.png" };
    }
  }

  onDelete = (id: string) => {
    const dialogRef = this.dialog.open(SubmitCheckComponent);
    let check = false;

    dialogRef.afterClosed().subscribe(result => {
      check = result?.submit;

      if (!check) {
        // cancel submit
        console.log(`cancel`)
        return;
      }

      this.postService.deleteData(id);
      this.router.navigate([`/postlist`]);
    });
  }

  onSubmit = (id: string) => {
    const dialogRef = this.dialog.open(SubmitCheckComponent);
    let check = false;

    console.log(this.post.context);
    console.log(id);

    dialogRef.afterClosed().subscribe(async result => {
      check = result?.submit;

      if (!check) {
        // cancel submit
        console.log(`cancel`)
        return;
      }
      console.log(`check ${check}`);

      this.postService.putData(id, {context: this.post.context}).subscribe({
        complete: () => {
            this.router.navigate([`/post/${id}`])
        }
      });
      // this.router.navigate([`/post/${id}`]);
    });
  }
}

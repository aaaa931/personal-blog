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
    console.log(this.users);
    console.log(this.post);

    this.isPost = this.router.url.includes("/post/") ? true : false;
    this.isEdit = this.router.url.includes("/editpost/") ? true : false;
  }

  getUser() {
    return this.users.find((user: any) => user.name === this.post.owner);
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

    dialogRef.afterClosed().subscribe(result => {
      check = result?.submit;

      if (!check) {
        // cancel submit
        console.log(`cancel`)
        return;
      }
      console.log(`check ${check}`);

      this.postService.putData(id, {context: this.post.context}).subscribe(res => {
        console.log(`post put success`)
      });
      this.router.navigate([`/post/${id}`]);
    });
  }
}

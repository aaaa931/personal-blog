import { url } from './../../assets/url';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { PostListService } from './../services/post-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  label: string | null = "";
  posts$: any
  users$: any

  constructor(
    private route: ActivatedRoute,
    private postListService: PostListService,
    private userService: UserService,
    private url: url,
    ) {  }

  ngOnInit(): void {
    this.url.redirect();

    this.label = this.route.snapshot.paramMap.get("label");

    if (this.label) {
      this.posts$ = this.postListService.filterData(this.label);
    } else {
      this.posts$ = this.postListService.getData();
    }

    this.userService.getData().subscribe(data => {
      this.users$ = data;
    });
  }
}

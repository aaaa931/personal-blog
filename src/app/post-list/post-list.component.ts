import { url } from './../../assets/url';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { PostListService } from './../services/post-list.service';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  label: string | null = '';
  posts: any;
  lastId: string = "";
  posts$: any;
  users$: any;
  isNoData: boolean = false;
  errorMsg: any;
  page: string = "";
  currentPage: number = 1;
  lastPage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postListService: PostListService,
    private userService: UserService,
    private url: url
  ) {
    route.paramMap.subscribe(params => {
      // reload url if query params change
      this.ngOnInit();
    })
  }

  async ngOnInit(): Promise<void> {
    this.url.redirect();

    this.label = this.route.snapshot.paramMap.get('label');
    this.getPostList();
    this.users$ = await lastValueFrom(this.userService.getData());
    // console.log(`this.users$ = ${this.users$}`);
  }

  changePage = (type: string) => {
    this.page = type;
    if (type === "next") {
      this.currentPage = this.currentPage + 1;
    } else {
      this.currentPage = this.currentPage - 1;
    }

    console.log(`this.currentPage = ${this.currentPage}`);

    if (this.currentPage < 1) {
      this.currentPage = 0;
    }

    console.log(type);

    this.getPostList();
  }

  getPostList = async () => {
    const perPage = 5 + 1;

    if (this.label) {
      console.log(`this.page = ${this.page}, this.lastId = ${this.lastId}`);
      this.posts$ = await lastValueFrom(this.postListService.filterData(this.lastId, this.page, this.label)).catch(e => {
        this.isNoData = true;
        this.errorMsg = JSON.stringify(e);
      });

      // console.log(`this.posts$.length = ${this.posts$.length}`);
      if (this.posts$.length < perPage) {
        this.lastPage = true;
      } else {
        // delete check data
        this.posts$.pop();
        this.lastPage = false;
      }

      this.lastId = this.posts$.slice(-1)[0].id;
      // console.log(`this.posts$ = ${JSON.stringify(this.posts$)}`);
      // this.lastDate = this.posts$.slice(-1)[0].date.seconds;
      // console.log(`this.lastId = ${this.lastId}`);
    } else {
      console.log(`this.page = ${this.page}, this.lastId = ${this.lastId}`);
      this.posts$ = await lastValueFrom(this.postListService.getData(this.lastId, this.page)).catch(e => {
        this.isNoData = true;
        this.errorMsg = JSON.stringify(e);
      });

      // console.log(`this.posts$.length = ${this.posts$.length}`);
      if (this.posts$.length < perPage) {
        this.lastPage = true;
      } else {
        // delete check data
        this.posts$.pop();
        this.lastPage = false;
      }

      this.lastId = this.posts$.slice(-1)[0].id;
      // console.log(`this.posts$ = ${JSON.stringify(this.posts$)}`);
      // this.lastDate = this.posts$.slice(-1)[0].date.seconds;
      // console.log(`this.lastId = ${this.lastId}`);
    }
  }
}

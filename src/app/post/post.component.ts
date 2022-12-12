import { lastValueFrom } from 'rxjs';
import { url } from './../../assets/url';
import { UserService } from './../services/user.service';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post$: any = [];
  user$: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private PostService: PostService,
    private UserService: UserService,
    private url: url,
    ) { }

  async ngOnInit() {
    this.url.redirect();

    this.id = this.route.snapshot.paramMap.get("id");
    this.post$ = this.PostService.filterData(this.id);
    this.user$ = await lastValueFrom(this.UserService.getData());

    // console.log(`this.post$ = ${JSON.stringify(this.post$)}`);
    // console.log(`this.user$ = ${JSON.stringify(this.user$)}`);
  }
}

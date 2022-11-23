import { EditPostComponent } from './edit-post/edit-post.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  {path: "", redirectTo: "/register", pathMatch: 'full'},
  {path: "register", component: RegisterComponent},
  {path: "postlist", component: PostListComponent},
  {path: "postlist/:label", component: PostListComponent},
  {path: "post/:id", component: PostComponent},
  {path: "editpost/:id", component: EditPostComponent},
  {path: "addPost", component: AddPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

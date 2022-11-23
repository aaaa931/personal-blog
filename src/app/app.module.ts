import { QuillModule } from 'ngx-quill';
import { UserService } from './services/user.service';
import { ConfigService } from './services/config.service';
import { PostListService } from './services/post-list.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CardComponent } from './card/card.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { AddPostComponent } from './add-post/add-post.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { HttpClientModule } from '@angular/common/http';
import { SubmitCheckComponent } from './submit-check/submit-check.component';
import { RegisterComponent } from './register/register.component';
import { DatePipe } from './pipes/date.pipe';
import { EditPostComponent } from './edit-post/edit-post.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostListComponent,
    PostComponent,
    CardComponent,
    SideNavComponent,
    AddPostComponent,
    NavSearchComponent,
    SubmitCheckComponent,
    RegisterComponent,
    DatePipe,
    EditPostComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    RouterModule,
    MatDividerModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatDialogModule,
    HttpClientModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'align': [] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'font': ['Roboto', 'Sans-Serif', 'Serif', 'Monospace', '標楷體', '微軟正黑體'] }],
          [{ size: [false, 'large', 'huge'] }],
          ['blockquote', 'code-block', 'link'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          ['clean']
        ]
      }
    })
  ],
  entryComponents: [NavSearchComponent],
  providers: [ConfigService, PostListService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

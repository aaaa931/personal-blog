import { Router } from '@angular/router';
import { url } from './../../assets/url';
import { LabelsService } from './../services/labels.service';
import { AddPostService } from './../services/add-post.service';
import { SubmitCheckComponent } from './../submit-check/submit-check.component';
import { MatDialog } from '@angular/material/dialog';
import Quill from 'quill';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  name: string | null = localStorage.getItem("name");
  date: any = new Date().toISOString().substring(0, 10);
  labels: string[] = [];
  // labels$: string[] = ["HTML", "CSS", "JavaScript", "Angular", "React", "Vue", "NodeJS", "MySql"];
  labels$: any = [];
  form!: FormGroup;
  check: boolean = false;
  submited: boolean = false;

  @ViewChild('labelInput') labelInput!: ElementRef<HTMLInputElement>;

  constructor(
    public formBuilder: FormBuilder,
    private dialog: MatDialog,
    private AddPostService: AddPostService,
    private LabelsService: LabelsService,
    private router: Router,
    private url: url
    ) {
  }

  ngOnInit(): void {
    this.url.redirect();

    this.labels$ = this.LabelsService.getData();

    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      context: ['', [Validators.required]],
    });

    // Quill font config
    let fontFamily = Quill.import('formats/font');
    fontFamily.whitelist = [
      'Roboto', 'Sans Serif', 'Serif', 'Monospace', '標楷體', '微軟正黑體'
    ];

    Quill.register(fontFamily, true);
  }

  get f() {
    return this.form.controls;
  }

  add(value: any): void {
    value = (value || '').trim();

    if (value && !this.labels.includes(value)) {
      this.labels.push(value);
    }

    console.log('this.labels', this.labels);
  }

  remove(label: string): void {
    const index = this.labels.indexOf(label);

    if (index >= 0) {
      this.labels.splice(index, 1);
      console.log('this.labels', this.labels);
    }
  }

  onKey(): void {
    this.submited = false;
  }

  submit(): void {
    const dialogRef = this.dialog.open(SubmitCheckComponent);

    dialogRef.afterClosed().subscribe(result => {
      // check result.submit === true
      this.check = result?.submit

      if (!this.check) {
        // cancel submit
        console.log(`cancel`)
        return;
      }
      console.log(`this.check ${this.check}`)

      // form valide
      this.submited = true;
      // get all value => JSON.stringify(this.form.value)
      // firestore post data typeof JSON
      console.log(`data => ${JSON.stringify({...this.form.value, labels: this.labels, name: this.name})}`);

      const addPost = this.AddPostService.addData({...this.form.value, labels: this.labels, name: this.name})
      addPost.subscribe(res => this.router.navigate([`/post/${Object.values(res)[0]}`]));
    });
  }
}

import { LabelsService } from './../services/labels.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent implements OnInit {
  value: string = "";
  labels$: any = [];

  constructor(
    private dialogRef: MatDialogRef<NavSearchComponent>,
    private router: Router,
    private labelsService: LabelsService,
  ) { }

  ngOnInit(): void {
    this.labels$ = this.labelsService.getData();
  }

  onSubmit() {
    const url = "/postlist/" + this.value;

    console.log(`${this.value}`);
    this.value = "";
    // console.log(`${this.value}`);
    this.router.navigate([url]);
    this.onClose();
  }

  onClose() {
    this.dialogRef.close();
  }

}

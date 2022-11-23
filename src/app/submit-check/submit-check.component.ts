import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-submit-check',
  templateUrl: './submit-check.component.html',
  styleUrls: ['./submit-check.component.css']
})
export class SubmitCheckComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SubmitCheckComponent>) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dialogRef.close({ submit: true });
  }

  onClose() {
    this.dialogRef.close();
  }

}

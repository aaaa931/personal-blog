import { NavSearchComponent } from './../nav-search/nav-search.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() themeEvt = new EventEmitter<any>();
  searched: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  themeChange() {
    this.themeEvt.emit();
  }

  toggleSearch() {
    this.searched = !this.searched;
  }

  showSearchDialog() {
    const dialogRef = this.dialog.open(NavSearchComponent);
  }
}

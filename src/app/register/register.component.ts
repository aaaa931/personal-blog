import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { firstValueFrom, lastValueFrom, map, take } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user$: any = [];
  name: string = "";
  valid: boolean = false;
  errorMsg: string = "";
  showWelcome: boolean = false;
  @Output() registerEvt = new EventEmitter();

  constructor(
    private router: Router,
    private UserService: UserService
    ) { }

  ngOnInit(): void {
    if (typeof localStorage.getItem("name") !== "undefined") {
      this.router.navigate(["/postlist"]);
    }
  }

  onKey(e: any) {
    this.valid = false;

    if (e.key === "Enter") {
      this.onSubmit()
    }
  }

  async onSubmit() {
    const newName = this.name.trim();
    const newUser = {name: newName, avatar: ""};

    console.log(newName)

    this.user$ = this.UserService.filterData(newName);
    console.log(0)
    const res: any = await firstValueFrom(this.user$);
    // const res: any = await this.getData(newName);

    console.log(res);
    console.log(`typeof res.error ${typeof res.error}`)

    // throw error
    if (newName === "") {
      this.valid = true;
      this.errorMsg = "請輸入暱稱";
      console.log(1)
      return;
    }

    if (typeof res.error === "undefined") {
      // check data is exists
      this.valid = true;
      this.errorMsg = `很抱歉，${newName} 已被註冊，請更換暱稱`;
      console.log(2)
      return;
    }

    console.log(3)
    this.UserService.postData(newUser);
    this.showWelcome = true
    console.log(this.showWelcome)
    setTimeout(this.welcome, 2000);
  }

  getData = async (newName: string) => {
    this.user$ = this.UserService.filterData(newName);
    return await firstValueFrom(this.user$);
  }

  welcome = () => {
    localStorage.setItem("name", this.name.trim());
    console.log(this.name);
    this.router.navigate(["/postlist"]);
    this.registerEvt.emit();
  }
}

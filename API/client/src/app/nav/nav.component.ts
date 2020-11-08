import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn: boolean;
  currentUser$: Observable<User>;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    //// 001
    //this.getCurrentUser();
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      //// 001
      //this.loggedIn = true;
    }, error => {
      console.log(error);
    });
  }

  logout(){
    this.accountService.logout();
    //// 001
    //this.loggedIn = false;
  }

  //// 001 this can cause memory leaks and not best practice
  //getCurrentUser() {
    // this.accountService.currentUser$.subscribe(user => {
    //   this.loggedIn = !!user;
    // }, error => {
    //   console.log(error);
    // })
  //}

}

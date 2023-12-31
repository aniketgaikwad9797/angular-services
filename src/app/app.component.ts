import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  acountsList: { name: string; status: string }[] = [];

  //Injecting Service through dependency Injection
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.acountsList = this.accountService.accounts;
  }
}

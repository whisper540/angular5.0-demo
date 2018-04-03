import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDatas;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.getUserDatas();
  }

  onSub(): void {
    this.router.navigate(['/vessel/archives', { test: 1 } ]);
  }

  getUserDatas(): void {
    // this.userDatas = this.loginService.login();
    this.userDatas = this.loginService.login().subscribe(userDatas => console.log(userDatas));
  }

}

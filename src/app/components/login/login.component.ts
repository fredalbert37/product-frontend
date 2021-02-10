import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  Login(): any {
    this.auth.login(this.user).subscribe((res: any ) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/manage']);
    }, (error: any ) => {
      console.log(error.error.message);
    });
  }
}

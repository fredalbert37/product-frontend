import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: '',
    roles: Array<string>()
  };
  rols: any;
  role: string;
  constructor( private auth: AuthService, private router: Router) {
    this.rols = [
      {
        vals: 'user', name: 'Usuario'
      },
      {
        vals: 'moderator', name: 'Moderador'
      },
      {
        vals: 'admin', name: 'Administrador'
      }
    ];
    this.role = '';
  }

  ngOnInit(): void {
  }
  Register(): any {
    this.user.roles.push(this.role);
    this.auth.signUp(this.user)
      .subscribe(
        (res: any) => {
          console.log(res);
          // localStorage.setItem('token', res.token);
          this.router.navigate(['/login']);
        },
        (err: any) => {
          console.log(err);
        }
      );
    // console.log(this.user);
  }

}

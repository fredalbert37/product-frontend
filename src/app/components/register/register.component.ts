import { Component, OnInit } from '@angular/core';

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
    roles: 'Roles'
  };
  rols: any;
  constructor() {
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
  }

  ngOnInit(): void {
  }
  Register(): any {
    console.log(this.user);
  }

}

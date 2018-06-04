import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user/user.service';
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(private router: Router,
              private _userService: UserService) { }

  ngOnInit() {
    init_plugins();
    this.formulario = new FormGroup({
      username: new FormControl('anderson.luz@example.com', Validators.required ),
      password: new FormControl('secret', Validators.required)
    });
  }

  login() {
    const username = this.formulario.get('username').value;
    this._userService.auth(this.formulario.value)
      .subscribe(
        (resp: any) => {
          this._userService.getDataUser(username)
            .subscribe(
              (res: any) => {
                const usuario = res.Usuario;
                this._userService.setInStorage(resp, usuario);
                console.log(res);
              }
            );
          this.router.navigate(['/dashboard']);
        }
      );
  }

}

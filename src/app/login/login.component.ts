import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    user: string;
    password: string;
    status: string;

  constructor(private _loginService: LoginService) {

  }

  ngOnInit() {

  }

  logIn(){
    //console.log('Click');
    console.log(`Componente: ${this._loginService.getDatos(this.user, this.password)}`);
  }

  ngOnDestroy() {

  }

}
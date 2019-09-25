import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import CryptoJS from 'crypto-js';

@Component({ 
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css'],
  providers : [UserService, Global]
})
export class BarraNavegacionComponent implements OnInit {
  public identity;
  username = new FormControl('', Validators.required);
  pssw = new FormControl('', Validators.required);

  constructor( public _userService: UserService, public global: Global, private _router: Router, private _route: ActivatedRoute,) { }

  ngOnInit() {

    this.getIdentity();
  }

  getIdentity() {
    this.identity = this._userService.getIdentity();
    // console.log(this.identity);
  }

  logOut() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  iniciarSesion(){
    let password = CryptoJS.SHA512(this.pssw.value).toString(CryptoJS.enc.Hex);
    console.log(this.username.value, password);
  }


  colapse(){

    if(document.getElementById('sidebar').className === '') {
      document.getElementById('sidebar').className = 'active';
      document.getElementById('sidebarCollapse').className = 'active';
    } else {
      document.getElementById('sidebar').className = '';
      document.getElementById('sidebarCollapse').className = '';
    }
  }


}

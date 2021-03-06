import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProvedorService } from '../../services/provedor.service';
import { Global } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProvedorService, Global, UserService]
})
export class HomeComponent implements OnInit {
  public admin: string;
  public data_provedor;
  public loading = false;
  public status: any;
  public statusText: string;
  public identity;

  constructor(public _provedorService: ProvedorService, public global: Global,
              public _userService: UserService) {}

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    // console.log('oeee homee', this.identity);
  }

  cerrarAlerta() {
    this.status = undefined;
  }

  cambiarSesion() {
    document.getElementById('btn-cambiar-de-sesion').click();
  }

}

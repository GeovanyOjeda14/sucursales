import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css'],
  providers : [UserService, Global]
})
export class BarraNavegacionComponent implements OnInit {
  public identity;

  constructor( public _userService: UserService, public global: Global, private _router: Router, private _route: ActivatedRoute) { }

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

}

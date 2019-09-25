import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panel-administrador',
  templateUrl: './panel-administrador.component.html',
  styleUrls: ['./panel-administrador.component.css'],
  providers : [UserService, Global]
})
export class PanelAdministradorComponent implements OnInit {
  public identity;

  constructor(public _userService: UserService, public global: Global, private _router: Router, private _route: ActivatedRoute) { }

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

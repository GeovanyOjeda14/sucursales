import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { SucursalService } from './../../services/sucursales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-consultorios',
  templateUrl: './gestionar-consultorios.component.html',
  styleUrls: ['./gestionar-consultorios.component.css'],
  providers : [UserService, SucursalService]
})
export class GestionarConsultoriosComponent implements OnInit {
  public consultorios;
  public status;
  public statusText;
  public loading;

  constructor(private _userService: UserService, private _sucursalService: SucursalService,
    private _router: Router) { }

  ngOnInit() {
    let identity = this._userService.getIdentity().id_sucursales;
    this.getConsultorios(identity);
  }

  getConsultorios(id_sucursales) {
    this,this.loading = true;
    this._sucursalService.getConsultorios(id_sucursales).subscribe( (response)=> {
      console.log(response);
      this.consultorios = response;
      this.loading = false;
    }, (err) => {
      console.log(err);
      this.status = 'error';
      this.statusText = 'Error en la conexion, por favor revisa tu conexion o intentalo mas tarde.';
      this.loading = false;
    } );
  }

  cerrarAlerta(){
    this.status = undefined;
  }

  editarConsultorio(info) {
    // console.log(info);
    localStorage.setItem('consultorio', JSON.stringify(info));
    this._router.navigate(['consultorio']);
  }


}

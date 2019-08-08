import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProvedorService } from '../../services/provedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-sucursales',
  templateUrl: './gestionar-sucursales.component.html',
  styleUrls: ['./gestionar-sucursales.component.css'],
  providers: [UserService, ProvedorService]
})
export class GestionarSucursalesComponent implements OnInit {
  public medicos;
  public servicios;
  public sucursales;

  constructor(private _userService: UserService, private _provedorService: ProvedorService, private _router: Router) { }

  ngOnInit() {

    // console.log(this.crearSucursal());
    let identity = this._userService.getIdentity().id_provedor;
    this.getMedicos(identity);
    this.getServicios(identity);
    this.getSucursales(identity);

  }

  getMedicos(id_provedor) {
   
    this._provedorService.getMedicosProvedor(id_provedor).subscribe( (response)=>{
      this.medicos = response;
    }, (err) => {

    });
  }

  getServicios(id_provedor){
    
    this._provedorService.getPublications(id_provedor).subscribe( (response) => {
      this.servicios = response;
    }, (err) => {

    });
  }

  getSucursales(id_provedor){
    this._provedorService.getSucursales(id_provedor).subscribe( (response) => {
      console.log(response);
      this.sucursales = response;
    }, (err) => {
      console.log(err);
    });
  }

}

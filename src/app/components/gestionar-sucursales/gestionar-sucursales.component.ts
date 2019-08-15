import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProvedorService } from '../../services/provedor.service';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';

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
  public sucursalSelect;
  public sucursalEliminar;
  public statusText;
  public status;
  public datos: FormGroup;
  public ver;
  public campo;

  constructor(private _userService: UserService, private _provedorService: ProvedorService, private _router: Router, 
    location: PlatformLocation, public formBuilder: FormBuilder) {

      location.onPopState(() => {
        document.getElementById('btn-cerrar-modal-editar').click();
        document.getElementById('btn-cerrar-modal-confirmacion').click();
  });
     }

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
      this.status = 'error';
      this.statusText = 'Error en la conexion, revisa tu conexion o intentalo mas tarde.';
    });
  }

  getServicios(id_provedor){
    
    this._provedorService.getPublications(id_provedor).subscribe( (response) => {
      this.servicios = response;
    }, (err) => {
      this.status = 'error';
      this.statusText = 'Error en la conexion, revisa tu conexion o intentalo mas tarde.';
    });
  }

  getSucursales(id_provedor){
    this._provedorService.getSucursales(id_provedor).subscribe( (response) => {
      console.log(response);
      this.sucursales = response;
    }, (err) => {
      console.log(err);
      this.status = 'error';
      this.statusText = 'Error en la conexion, revisa tu conexion o intentalo mas tarde.';
    });
  }

  editarSucursal(info_sucursal) {
    this.sucursalSelect = info_sucursal;
    this,this.validacionesSucursal();
    document.getElementById('modal-editar').click();
    console.log(this.sucursalSelect);
  }

  validacionesSucursal() {
    this.datos = this.formBuilder.group({
      nombre: [this.sucursalSelect.nombre, [Validators.required, Validators.minLength(2), Validators.maxLength(50),
                Validators.pattern('[a-z A-z ñ]*')]],
      direccion: [this.sucursalSelect.direccion, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      telefono: [this.sucursalSelect.telefono ,[Validators.pattern('[0-9]*'), Validators.minLength(7), Validators.maxLength(12)]],
      municipio: ['Pasto', [Validators.required]]
      
});

  }

  confirmacioEliminarSucursal(info_sucursal) {
    this.sucursalEliminar = info_sucursal;
    document.getElementById('btn-modal-confirmacion').click();
  }

  eliminarSucursal() {
    // console.log('oe');
    console.log(this.sucursalEliminar);
  }

  cerrarAlerta(){
    this.status = undefined;
  }

  mouseEnter(campo) {
    this.ver = campo;
    // console.log('campo');
  }
 
  mouseLeave() {
    this.ver = '';
  }

  editar(campo) {
    this.campo = document.getElementById(campo);
    this.campo.readOnly = false;
  }

  cambio(campo) {
    this.campo = document.getElementById(campo);
    this.campo.readOnly = true;
  }
}

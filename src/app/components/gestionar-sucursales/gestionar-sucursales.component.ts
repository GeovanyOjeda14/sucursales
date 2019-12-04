import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProvedorService } from '../../services/provedor.service';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { FormGroup, FormBuilder} from '@angular/forms';
import { SucursalService } from '../../services/sucursales.service';

@Component({
  selector: 'app-gestionar-sucursales',
  templateUrl: './gestionar-sucursales.component.html',
  styleUrls: ['./gestionar-sucursales.component.css'],
  providers: [UserService, ProvedorService, SucursalService]
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
  public loading;

  constructor(private _userService: UserService, private _provedorService: ProvedorService, private _router: Router, 
    location: PlatformLocation, public formBuilder: FormBuilder, private _sucursalService: SucursalService) {

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

    this.loading = true;
   
    this._provedorService.getMedicosProvedor(id_provedor).subscribe( (response)=>{
      this.medicos = response;
      this.loading = false;
    }, (err) => {
      this.status = 'error';
      this.statusText = 'Error en la conexion, revisa tu conexion o intentalo mas tarde.';
      this.loading = false;
    });
  }

  getServicios(id_provedor){
    
    this.loading = true;
    this._provedorService.getPublications(id_provedor).subscribe( (response) => {
      this.servicios = response;
      this.loading = false;
    }, (err) => {
      this.status = 'error';
      this.statusText = 'Error en la conexion, revisa tu conexion o intentalo mas tarde.';
      this.loading = false;
    });
  }

  getSucursales(id_provedor){
    this.loading = true;
    this._provedorService.getSucursales(id_provedor).subscribe( (response) => {
      console.log(response);
      this.sucursales = response;
      this.loading = false;
    }, (err) => {
      console.log(err);
      this.status = 'error';
      this.statusText = 'Error en la conexion, revisa tu conexion o intentalo mas tarde.';
      this.loading = false;
    });
  }

  // editarSucursal(info_sucursal) {
  //   this.sucursalSelect = info_sucursal;
  //   this,this.validacionesSucursal();
  //   document.getElementById('modal-editar').click();
  //   console.log(this.sucursalSelect);
  // }

  // validacionesSucursal() {
  //   this.datos = this.formBuilder.group({
  //     nombre: [this.sucursalSelect.nombre, [Validators.required, Validators.minLength(2), Validators.maxLength(50),
  //               Validators.pattern('[a-z A-z ñ]*')]],
  //     direccion: [this.sucursalSelect.direccion, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
  //     telefono: [this.sucursalSelect.telefono ,[Validators.pattern('[0-9]*'), Validators.minLength(7), Validators.maxLength(12)]],
  //     municipio: ['Pasto', [Validators.required]]  
  //     });

  // }

  confirmacioEliminarSucursal(info_sucursal) {
    this.sucursalEliminar = info_sucursal;
    document.getElementById('btn-modal-confirmacion').click();
  }

  eliminarSucursal() {
    // console.log('oe');
    window.scroll(0, 0);
    // console.log(this.sucursalEliminar);
    this.loading = true;
    this._sucursalService.dltSucursal(this.sucursalEliminar.id_sucursales).subscribe( (response) => {
      console.log(response);
      this.loading = false;
      if(response === true) {
        let identity = this._userService.getIdentity().id_provedor;
        this.getSucursales(identity);
        this.status = 'success';
        this.statusText = 'Sucursal eliminada con exito.';
      }
    }, (err) => {
      console.log(err);
      this.status = 'error';
      this.statusText = 'Error en la conexion, por favor revisa tu conexion o intentalo mas tarde';
      this.loading = false;
    } );

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

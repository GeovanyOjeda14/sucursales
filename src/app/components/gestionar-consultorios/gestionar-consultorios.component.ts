import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { SucursalService } from './../../services/sucursales.service';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { ProvedorService } from './../../services/provedor.service';

@Component({
  selector: 'app-gestionar-consultorios',
  templateUrl: './gestionar-consultorios.component.html',
  styleUrls: ['./gestionar-consultorios.component.css'],
  providers : [UserService, SucursalService, ProvedorService]
})
export class GestionarConsultoriosComponent implements OnInit {
  public consultorios;
  public status;
  public statusText;
  public loading;
  public infoEliminar;
  public id_consultorio;
  public medicos;
  public siguiente;

  constructor(private _userService: UserService, private _sucursalService: SucursalService, private _router: Router,
    location: PlatformLocation, private _provedorService : ProvedorService) { 
      
      location.onPopState(() => {
        document.getElementById('btn-modal-cerrar-eliConsul').click();
        document.getElementById('btn-modal-cerrar-info').click();
      });
    }

  ngOnInit() {
    let identity = this._userService.getIdentity().id_sucursales;
    this.getConsultorios(identity);
  }

  getConsultorios(id_sucursales) {
    console.log('asdasd asd asd ');
    this,this.loading = true;
    this._sucursalService.getConsultorios(id_sucursales).subscribe( (response)=> {
      console.log('consuls', response);
      this.consultorios = response;
      this.loading = false;
      // console.log(this.consultorios.length);
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
    localStorage.removeItem('consultorio');
    localStorage.setItem('consultorio', JSON.stringify(info));
    this._router.navigate(['consultorio']);
  }

  eliminarConsultorio(id_consultorio){
  console.log('aqui eli');
   this.loading = true;
   this.id_consultorio = id_consultorio;
   this._sucursalService.getEventsConsul(id_consultorio).subscribe( (response) => {
     console.log(response);
     this.loading = false;
     window.scroll(0,0);
     if(response[0].eventsC <= 0 ) {
      console.log('elimianr');
      this.infoEliminar = true;
      document.getElementById('btn-modal-eliminar-consultorio').click();
     } else {
       console.log('no se puse eliminar');
       this.infoEliminar = false;
       document.getElementById('btn-modal-eliminar-consultorio').click();
     }
   }, (err) => {
     this.loading = false;
     console.log(err);
     this.status = 'error';
     this.statusText = 'Error en la conexion, por favor revisa tu conexion o intentalo mas tarde.';
   } );
  }

  eliConsul(){

    this.loading = true;
    this._sucursalService.dltConsultorio(this.id_consultorio).subscribe( (response) => {
      this.loading = false;
      if(response === true){
        this.status = 'success';
        this.statusText = 'Consultorio eliminado exitosamente.';
        let identity = this._userService.getIdentity().id_sucursales;
        this.getConsultorios(identity);
      }
      console.log(response);
    }, (err) => {
      this.status = 'error';
      this.statusText = 'Error en la conexion, por favor revisa tu conexion o intentalo mas tarde.';
      this.loading = false;
      console.log(err);
    } );
  }

  getMedicos() {
   
    let identity = this._userService.getIdentity().id_provedor;
    this._provedorService.getMedicosProvedor(identity).subscribe( (response)=>{
      // this.medicos = response;
      // console.log(response);
      this.medicos = response;
      if(this.medicos.length >= 1) {
        for(let i = 0; i < this.medicos.length; i++) {

          if( this.medicos[i].activo === 'false') {
            // console.log('aqui');
            this.siguiente = true;
            break;
          } else {
            this.siguiente = false;
          }
        }
      }

      if(this.siguiente === true) {
        this._router.navigate(['consultorio']);
      } else {
        document.getElementById('btn-info-medico').click();
      }

      console.log(this.siguiente);

    }, (err) => {
      this.status = 'error';
      this.statusText = 'Error en la conexion, revisa tu conexion o intentalo mas tarde.';
    });
  }

}

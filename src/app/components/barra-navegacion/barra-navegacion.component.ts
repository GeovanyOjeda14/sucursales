import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import CryptoJS from 'crypto-js';
import { ProvedorService } from '../../services/provedor.service';
import { MedicoService } from '../../services/medico.service';
import { SucursalService } from '../../services/sucursales.service';
import { ApplicationService } from '../../services/app.service';
// import { HomeComponent } from '../home/home.component';


@Component({ 
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css'],
  providers : [UserService, Global, ProvedorService, MedicoService, SucursalService, ApplicationService]
})
export class BarraNavegacionComponent implements OnInit {
  public identity;
  username = new FormControl('', Validators.required);
  pssw = new FormControl('', Validators.required);
  loading;
  status;
  statusText;


  constructor( public _userService: UserService,
               public global: Global, 
               private _router: Router, 
               private _route: ActivatedRoute,
               private _provedorService: ProvedorService,
               private _medicoService: MedicoService,
               private _sucursalService: SucursalService,
               private _aplicationService: ApplicationService,
              //  private home: HomeComponent
               ) { }

  ngOnInit() {

    this.getIdentity();
  }

  getIdentity() {
    this.identity = this._userService.getIdentity();
    console.log('identity', this.identity);
  }

  logOut() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  iniciarSesion(){
    let password = CryptoJS.SHA512(this.pssw.value).toString(CryptoJS.enc.Hex);
    console.log(this.username.value, password);
  }


  // Metodo para slidemenu
  // colapse(){

  //   if(document.getElementById('sidebar').className === '') {
  //     document.getElementById('sidebar').className = 'active';
  //     document.getElementById('sidebarCollapse').className = 'active';
  //   } else {
  //     document.getElementById('sidebar').className = '';
  //     document.getElementById('sidebarCollapse').className = '';
  //   }
  // }


  // Metodos para el inicio de sesion
  login() {

    this.loading = true;

    let password = CryptoJS.SHA512(this.pssw.value).toString(CryptoJS.enc.Hex);

    this._provedorService.postLogin(this.username.value, password).subscribe((response) => {

      console.log(response);

      if (response.login === true) {

        if (response.esAdmin === 2) {
          this.status = 'warning';
          this.statusText = 'Error cuenta de usuario, para loguearse con una cuenta de usuario por favor utiliza la' ;
          this.loading = false;
        }

         if (response.esAdmin === 1) {
          localStorage.setItem('token', JSON.stringify(response.token));
          // true admin
          this.identityMember(response.id_usuario, 'admin');
          document.getElementById('btn-cerrar-modal').click();
        }
         if (response.esAdmin === 3) {

          localStorage.setItem('token', JSON.stringify(response.token));
          this.identityMember(response.id_usuario, 'med');
          document.getElementById('btn-cerrar-modal').click();
        }

        if (response.esAdmin === 4) {

          localStorage.setItem('token', JSON.stringify(response.token));
          this.identityMember(response.id_usuario, 'sucu');
          document.getElementById('btn-cerrar-modal').click();
        }

      } else {
        this.status = 'error';
        this.statusText = 'Usuario o contraseña incorrectos.';
        this.loading = false;
      }

      // this.loading = false;

    }, (err) => {
      console.log(err);
      // this.home.status = 'error';
      // this.home.statusText = 'Error en la conexión, por favor intentalo más tarde o revisa tu conexión.';
      this.loading = false;
    });

    // this._router.navigate(['/home']);

  }

  identityMember(id, member) {

    // this.loading = true;

      console.log(id);

      if (member === 'admin') {

        // this.locket(id);
        this._provedorService.getIdentity(id).subscribe( (response) => {
          console.log('respuesta', response);

         localStorage.setItem('identity', JSON.stringify(response[0]));
         this.locket(id);

           // this._router.navigate(['/home/', response.id_usuario, response.esAdmin ]);
          //  this.loading = false;

        }, (err) => {
          // this.home.status = 'error';
          // this.home.statusText = 'Error en la conexión, por favor intentalo más tarde o revisa tu conexión.';
          this.loading = false;
        });

      }

      if (member === 'med') {

        // this.locket(id);
        this._medicoService.getInfoMedico(id).subscribe( (response) => {
          console.log(response);

          let identity = response[0];
          localStorage.setItem('identity', JSON.stringify(identity));
          this.locket(id);
          this.loading = false;
        }, (err) => {
          // this.home.status = 'error';
          // this.home.statusText = 'Error en la conexión, por favor intentalo más tarde o revisa tu conexión.';
          this.loading = false;
        });

      }

      if(member === 'sucu') {
        this._sucursalService.getIdentitySucursal(id).subscribe( (response) => {
          console.log(response);
          let identity = response[0];
          localStorage.setItem('identity', JSON.stringify(identity));
          localStorage.setItem('confirmar', JSON.stringify(true));
          this.loading = false;
          // location.reload();
          this._router.navigate(['']);
          this.getIdentity();
          // this._router.navigate(['home']);
        }, (err) => {
          // this.home.status = 'error';
          // this.home.statusText = 'Error en la conexión, por favor intentalo más tarde o revisa tu conexión.';
          console.log(err);
        } );
      }

  }

  locket(id) {
    console.log(id);
    this._aplicationService.getConfirmacionCuenta(id).subscribe( (response) => {
      console.log(response);

      if (response === true) {
        console.log('aqui home');
        localStorage.setItem('confirmar', JSON.stringify(true));
        // location.reload();
        this._router.navigate(['']);
        this.getIdentity();
      } else {
        this._router.navigate(['confirmar-cuenta']);
        localStorage.setItem('confirmar', JSON.stringify(false));
      }
      this.loading = false;

    } , (err) => {
      // this.home.status = 'error';
      // this.home.statusText = 'Error en la conexión, por favor intentalo más tarde o revisa tu conexión.';
      this.loading = false;
    });
  }

  cerrarAlerta() {
    this.status = undefined;
  }


}

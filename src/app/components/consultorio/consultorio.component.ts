import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProvedorService } from '../../services/provedor.service';
import { FormControl, Validators } from '@angular/forms';

// componente padre
// import { ContactenosComponent } from '../contactenos/contactenos.component';
import { CrearSucursalComponent } from '../crear-sucursal/crear-sucursal.component';

@Component({
  selector: 'app-consultorio',
  templateUrl: './consultorio.component.html',
  styleUrls: ['./consultorio.component.css'],
  providers: [UserService, ProvedorService]
})
export class ConsultorioComponent implements OnInit {

  @Input() medicos;
  medicoSelect = new FormControl('', Validators.required);
  servicioSelect = new FormControl('', Validators.required);
  nombreConsultorio = new FormControl('', Validators.required);
  extensionConsultorio = new FormControl('', Validators.required);

  constructor( private _provedorService: ProvedorService, private _crearSucursal: CrearSucursalComponent ) { }

  ngOnInit() {
    // let identity = this._userService.getIdentity().id_provedor;
    // this.getMedicos(identity);


  }

  getMedicos(id_provedor){

    this._provedorService.getMedicosProvedor(id_provedor).subscribe( (response)=> {
      console.log(response);
      this.medicos = response;
    }, (err) => {

    });

  }

  medSelect(ev){
    // console.log(this.medicoSelect.value);
    // this._crearSucursal.infoConsultorio = {medico_id: this.medicoSelect.value, nombreConsultorio: this.nombreConsultorio.value,
    // extensionConsultorio: this.extensionConsultorio.value, id_servicio: this.servicioSelect.value };
  }

}

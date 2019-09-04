import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service';
// import { ProvedorService } from '../../services/provedor.service';
import { SucursalService } from '../../services/sucursales.service';
import { FormControl, Validators } from '@angular/forms';

// componente padre
// import { ContactenosComponent } from '../contactenos/contactenos.component';
// import { CrearSucursalComponent } from '../crear-sucursal/crear-sucursal.component';

@Component({
  selector: 'app-consultorio',
  templateUrl: './consultorio.component.html',
  styleUrls: ['./consultorio.component.css'],
  providers: [SucursalService]
})

export class ConsultorioComponent implements OnInit {

  // @Input() medicos;
  medicoSelect = new FormControl('', Validators.required);
  servicioSelect = new FormControl('', Validators.required);
  nombreConsultorio = new FormControl('', [Validators.required, Validators.maxLength(20)]);
  extensionConsultorio = new FormControl('');
  public infoConsultorio;


  constructor(private _sucursalService: SucursalService ) { 
  }

  ngOnInit() {
      this.getInfoConsultorio();
  }

  getInfoConsultorio(){
    let consultorio = localStorage.getItem('consultorio')
    this.infoConsultorio = JSON.parse(consultorio);
    console.log(this.infoConsultorio);
    this.nombreConsultorio.setValue(this.infoConsultorio.nombre);
    this.extensionConsultorio.setValue(this.infoConsultorio.extencion);
  }

  
 

}

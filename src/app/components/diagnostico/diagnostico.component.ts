import { Component, OnInit } from '@angular/core';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css'],
  providers: [DiagnosticoService]
})
export class DiagnosticoComponent implements OnInit {
  public diagnosticos;

  constructor(private _diagnosticoService : DiagnosticoService) { }

  ngOnInit() {
    this.getDiagnosticos();
  }

  getDiagnosticos(){
    this._diagnosticoService.getDiagnostico().subscribe( (response) => {
      // console.log(response);
      this.diagnosticos = response;
     // console.log(response);
    }, (err) => {
      // console.log(err);
    });
  }

}

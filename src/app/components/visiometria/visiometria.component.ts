import { Component, OnInit, OnDestroy} from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-visiometria',
  templateUrl: './visiometria.component.html',
  styleUrls: ['./visiometria.component.css']
})
export class VisiometriaComponent implements OnInit, OnDestroy {

  public datosVisiomentria: FormGroup;
  public usaGafas;
  public datosHistGeneral: FormGroup;
  public caracGafas = [];
  public signosSintomas = [];
  public respuestaGafas;
  protected _onDestroy = new Subject<void>();


  public antecedentesFMultiCtrl: FormControl = new FormControl();

  constructor(private formBuilder: FormBuilder) {
    this.usaGafas = 'si';
   }

  ngOnInit() {
    this.iniciarDatosVisiometria();
    this.getTiposGafas();
    this.getSignosySintomas();

    }

  iniciarDatosVisiometria () {
    this.datosVisiomentria = this.formBuilder.group({
      tipoConsulta: ['', [Validators.required]],
    });
  }

  getTiposGafas() {
   this.caracGafas = [{nombre : 'VL'},{nombre : 'VP'},{nombre : 'PC'},
   {nombre : 'Bifocal'}, {nombre : 'Progresivo'}, {nombre : 'Filtros'},
   {nombre : 'LC TGP'}, {nombre : 'LC BLANDO'} ];
  }

  getSignosySintomas() {
    this.signosSintomas = [{nombre : 'Asintomático'},{nombre : 'Disminución Visual de Cerca'}, {nombre : 'PC'},
    {nombre : 'Disminución visual de lejos'}, {nombre : 'Cefaleas'}, {nombre : 'Resequedad ocular'},
    {nombre : 'Ardor Ocular'}, {nombre : 'Lagrimeo'}, {nombre : 'Cansancio Ocular'}, {nombre : 'Irritación'},
    {nombre : 'Fotofobia'}, {nombre : 'Prurito Ocular'}, {nombre : 'Salto de renglon'}];
  }

  saberUsaGafas(parametro) {
    console.log(parametro.value);
    const variable = true;
    switch (variable === true) {
      case parametro.value === 'si' :
      this.usaGafas = 'tiposGafas';
      break;

      case parametro.value === 'no' :
          this.usaGafas = '';
      break;

    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  // toggleSelectAll(selectAllValue: boolean) {
  //   this.filteredAntecedentesFMulti.pipe(take(1), takeUntil(this._onDestroy))
  //     .subscribe(val => {
  //       if (selectAllValue) {
  //         this.antecedentesFMultiCtrl.patchValue(val);
  //       } else {
  //         this.antecedentesFMultiCtrl.patchValue([]);
  //       }
  //     });
  // }

  // protected setInitialValue() {
  //   this.filteredAntecedentesFMulti
  //     .pipe(take(1), takeUntil(this._onDestroy))
  //     .subscribe(() => {

  //     });
  // }


}

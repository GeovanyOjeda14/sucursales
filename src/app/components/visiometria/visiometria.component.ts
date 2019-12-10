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
  public caracGafas = [];
  public signosSintomas = [];
  public respuestaGafas;
  public examenExterno = [];
  public interpretaciones = [];
  public cromatica = [];
  public diagnostico = [];
  public recomendaciones = [];

  public vista;

  protected AntecedentesF: AntecedentesF[] = ANTECEDENTESF;
  protected _onDestroy = new Subject<void>();
  public antecedentesFMultiFilterCtrl: FormControl = new FormControl();
  public filteredAntecedentesFMulti: ReplaySubject<AntecedentesF[]> = new ReplaySubject<AntecedentesF[]>(1);
  public antecedentesFMultiCtrl: FormControl = new FormControl();

  constructor(private formBuilder: FormBuilder) {
    this.usaGafas = 'si';
    this.vista = 'consulta';
   }

  ngOnInit() {
    this.iniciarDatosVisiometria();
    this.getTiposGafas();
    this.getSignosySintomas();
    this.filteredAntecedentesFMulti.next(this.AntecedentesF.slice());
    this.antecedentesFMultiFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterAntecedentesFMulti();
    });
    this.getExamenExterno();
    this.getInterpretacion();
    this.getCromática();
    this.getDiagnostico();
    this.getRecomendaciones();

    }

  iniciarDatosVisiometria () {
    this.datosVisiomentria = this.formBuilder.group({
      tipoConsulta: ['', [Validators.required]],
      g: ['', [Validators.required]],
      otroAntecedentesFamiliares: ['', [Validators.required]],
      patologicos: ['', [Validators.required]],
      quirurgicos: ['', [Validators.required]],
      traumaticos: ['', [Validators.required]],
      vlod: ['', [Validators.required]],
      vloi : ['', [Validators.required]],
      vlao : ['', [Validators.required]],
      vpod : ['', [Validators.required]],
      vpoi : ['', [Validators.required]],
      vpao : ['', [Validators.required]],
      dnpOd : ['', [Validators.required]],
      dnpOi : ['', [Validators.required]],
      scod : ['', [Validators.required]],
      scoi : ['', [Validators.required]],
      scao : ['', [Validators.required]],
      esfod : ['', [Validators.required]],
      esfoi: ['', [Validators.required]],
      cilod: ['', [Validators.required]],
      ciloi: ['', [Validators.required]],
      ejeod: ['', [Validators.required]],
      ejeoi: ['', [Validators.required]],
      addod: ['', [Validators.required]],
      addoi: ['', [Validators.required]],
      vlTexto: ['', [Validators.required]],
      vpTexto: ['', [Validators.required]],
      hishberg: ['', [Validators.required]],
      ducciones: ['', [Validators.required]],
      versiones: ['', [Validators.required]],
      pcc: ['', [Validators.required]],
      reesod: ['', [Validators.required]],
      reesoi: ['', [Validators.required]],
      recilod: ['', [Validators.required]],
      reciloi: ['', [Validators.required]],
      rejeod: ['', [Validators.required]],
      rejeoi: ['', [Validators.required]],
      subesfod: ['', [Validators.required]],
      subesfoi: ['', [Validators.required]],
      subcilod: ['', [Validators.required]],
      subciloi: ['', [Validators.required]],
      subejeod: ['', [Validators.required]],
      subejeoi: ['', [Validators.required]],
      subavod: ['', [Validators.required]],
      subavoi: ['', [Validators.required]],
      subaddod: ['', [Validators.required]],
      subaddoi : ['', [Validators.required]],
    });


  }

  siguiente(parametro: string) {
    const variable = true;

    switch (variable === true) {
      case parametro === 'consulta':
        this.vista = 'anteojos';
        break;
    }
    let info = {tipoConsulta: this.datosVisiomentria.value.tipoConsulta};
    console.log(this.datosVisiomentria.value.g);
  }

  anterior(parametro: string) {
    let variable = true;

    switch (variable === true) {
      case parametro === 'anteojos' :  this.vista = 'consulta';
    }
  }

  checkTipos(ev, tipo) {

    let variables = [];
    variables.push(tipo);
    console.log(variables);
  }

  getTiposGafas() {
   this.caracGafas = [{nombre : 'VL' , codigo : 1}, {nombre : 'VP', codigo : 2}, {nombre : 'PC', codigo : 3},
   {nombre : 'Bifocal', codigo : 4 }, {nombre : 'Progresivo', codigo : 5}, {nombre : 'Filtros', codigo : 6},
   {nombre : 'LC TGP', codigo : 7}, {nombre : 'LC BLANDO', codigo : 8} ];
  }

  getSignosySintomas() {
    this.signosSintomas = [{nombre : 'Asintomático'}, {nombre : 'Disminución Visual de Cerca'}, {nombre : 'PC'},
    {nombre : 'Disminución visual de lejos'}, {nombre : 'Cefaleas'}, {nombre : 'Resequedad ocular'},
    {nombre : 'Ardor Ocular'}, {nombre : 'Lagrimeo'}, {nombre : 'Cansancio Ocular'}, {nombre : 'Irritación'},
    {nombre : 'Fotofobia'}, {nombre : 'Prurito Ocular'}, {nombre : 'Salto de renglon'}];
  }

  getExamenExterno() {
    this.examenExterno = [{nombre : 'Hiperemia Conjuntival'}, {nombre : 'Pterigio N'}, {nombre : 'Pterigio T'},
    {nombre : 'Pinguécula'}, {nombre : 'Nevus'}, {nombre : 'Blefaritis'},
    {nombre : 'Blefaritis seborreica'}, {nombre : 'Secreción'}, {nombre : 'Leucoma Corneal'}, {nombre : 'Ptosis palpebral'}];
  }

  getInterpretacion() {
    this.interpretaciones = [{nombre : 'No requiere corrección óptica'}, {nombre : 'Defecto refractivo adecuadamente corregido'},
    {nombre : 'Defecto refractivo inadecuadamente corregido'},
    {nombre : 'Defecto refractivo no corregido'}, {nombre : 'Grafas no formuladas'}];
  }

  getCromática() {
    this.cromatica = [{nombre : 'Normal'}, {nombre : 'Discromatopsia'},
    {nombre : 'Ceguera al color'}];
  }

  getDiagnostico() {
    this.diagnostico = [{nombre : 'Ementropía'}, {nombre : 'Amentropía'},
    {nombre : 'Disminución Visual'}];
  }

  getRecomendaciones() {
    this.recomendaciones = [{nombre : 'Valoración por optometría clinica'}, {nombre : 'Valoración por oftalmología'},
    {nombre : 'Control Visiometría'}];
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

  toggleSelectAll(selectAllValue: boolean) {
    this.filteredAntecedentesFMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (selectAllValue) {
          this.antecedentesFMultiCtrl.patchValue(val);
        } else {
          this.antecedentesFMultiCtrl.patchValue([]);
        }
      });
  }

  protected setInitialValue() {
    this.filteredAntecedentesFMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {

      });
  }

  protected filterAntecedentesFMulti() {
    if (!this.AntecedentesF) {
      return;
    }
    // get the search keyword
    let search = this.antecedentesFMultiFilterCtrl.value;
    if (!search) {
      this.filteredAntecedentesFMulti.next(this.AntecedentesF.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredAntecedentesFMulti.next(
      // tslint:disable-next-line: no-shadowed-variable
      this.AntecedentesF.filter(AntecedentesF => {
        return AntecedentesF.nombre.toLowerCase().indexOf(search) > -1;
      })
    );
  }


}

export interface AntecedentesF {
  id: string;
  nombre: string;
  disponible: string;
}

export interface AntecedentesFGroup {
  nombre: string;
  disponible: string;
  antecedentesF: AntecedentesF[];
}

export const ANTECEDENTESF: AntecedentesF[] = [
  {nombre: 'Cardiopatías', disponible: 'true', id: '1'},
  {nombre: 'Diabetes', disponible: 'true', id: '2'},
  {nombre: 'Hipertensión', disponible: 'true', id: '3'},
  {nombre: 'Asma', disponible: 'true', id: '4'},
  {nombre: 'Enfermedad Psiquiátrica', disponible: 'true', id: '5'},
  {nombre: 'Enfisema', disponible: 'true', id: '6'},
  {nombre: 'Cáncer', disponible: 'true', id: '7'},
  {nombre: 'Epilepsia', disponible: 'true', id: '8'},
];

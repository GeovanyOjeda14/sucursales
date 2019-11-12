import { AfterViewInit, Component, OnDestroy , OnInit, ViewChild} from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApplicationService } from '../../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { MedicoService } from '../../services/medico.service';
import { UserService } from '../../services/user.service';
import { PlatformLocation } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';


@Component({
  selector: 'app-hst-general',
  templateUrl: './hst-general.component.html',
  styleUrls: ['./hst-general.component.css'],
  providers: [ApplicationService, MedicoService, UserService]
})
export class HstGeneralComponent implements OnInit, AfterViewInit, OnDestroy{
// cambios



  public antecedentesF;
  public listaAntecedentesF = [];
  public listaHabitos = [];
  public grupoAntecedentesF;

  protected AntecedentesF : AntecedentesF[] = ANTECEDENTESF;

  public antecedentesFMultiCtrl: FormControl = new FormControl();
  public antecedentesFMultiFilterCtrl: FormControl = new FormControl();
  public filteredAntecedentesFMulti: ReplaySubject<AntecedentesF[]> = new ReplaySubject<AntecedentesF[]>(1);
 

  @ViewChild('multiSelect') multiSelect: MatSelect;

  protected _onDestroy = new Subject<void>();

  public grupoHabitos;
  public datos: FormGroup; 
  public datos2: FormGroup;
  public infoUser;

  public consulta;
  public causa : string;
  public enfermedad : string;

  public antecedeneFCombo : string;
  public antecedenteOtro : string;
 
  public sistema = [];

  public antecedentesFamiliaresArray = [];
  public txtOtroAntecedente: string;

  public antecedentesPersonalesArray = [];
  public txtAntePatologicos: string;
  public txtAnteQuirurgicos: string;
  public txtAnteTraumaticos: string;



  public varCardio;
  public varVascular;
  public varGastro;
  public varGenito;
  public varEndo;
  public varOsteo;
  public varNeuro;
  public varPiel;

  public cardioRes;
  public descripcionCardio : string;
  public vascular;
  public descripcionVascular : string;
  public gastro;
  public descripcionGastro : string;
  public genito;
  public descripcionGenito : string;
  public endo;
  public descripcionEndo : string;
  public osteo;
  public descripcionOsteo : string;
  public neuro;
  public descripcionNeuro : string;
  public piel;
  public descripcionPiel : string;


  public examen = [];
 
  public varCabeza;
  public varOjos;
  public varOidos;
  public varNariz;
  public varBoca;
  public varCuello;
  public varTorax;
  public varPulmones;
  public varCorazon;
  public varAbdomen;
  public varGenitoUrinario;
  public varColumna;
  public varExtremidades;
  public varNeurologico;
  public varFanereas;

  public cabeza;
  public descripcionCabeza : string;
  public ojos;
  public descripcionOjos : string;
  public oidos;
  public descripcionOidos : string;
  public nariz;
  public descripcionNariz : string;
  public boca;
  public descripcionBoca : string;
  public cuello;
  public descripcionCuello : string;
  public torax;
  public descripcionTorax : string;
  public pulmones;
  public descripcionPulmones : string;
  public corazon;
  public descripcionCorazon : string;
  public abdomen;
  public descripcionAbdomen : string;
  public genitoUrinario;
  public descripcionGenitoUrinario : string;
  public columna;
  public descripcionColumna : string;
  public extremidades;
  public descripcionExtremidades : string;
  public neurologico;
  public descripcionNeurologico : string;
  public fanereas;
  public descripcionFanereas : string;

  public listaDiagnosticos = [];
  public nuevoDiagnostico = [];
  public descripcionDiag: string;
  public codDiag:string;
  public iDiagnostico : Int16Array;

  public diagnosticos;

  public datoDiagnostico = '';


  constructor(private formBuilder: FormBuilder, private _aplicationService: ApplicationService, private _route: ActivatedRoute,
    private _medicoService: MedicoService, private _userService: UserService, location: PlatformLocation) { 
    }

  ngOnInit() {
    // this.tpDatos();
    this.habitosyRiesgos();
    this.validaciones();
    this.revisionSistemas();
    this.examenMedico();
    // this.diagnostico();
    

    this.antecedentesFMultiCtrl.setValue([this.AntecedentesF[1]]);
    this.filteredAntecedentesFMulti.next(this.AntecedentesF.slice());

    this.antecedentesFMultiFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(()=>{
      this.filterAntecedentesFMulti();
    });

    

  }

  guardarAnteFMulti(ev){
    this.antecedentesFamiliaresArray = ev.value;
    console.log(this.txtOtroAntecedente);
    let txtOtroAntecedente = this.txtOtroAntecedente;
    this.antecedentesFamiliaresArray.push(txtOtroAntecedente);

    //console.log(this.antecedentesFamiliaresArray);
  }

  guardarAntecedentesPersonales(){
    
    console.log(this.antecedentesPersonalesArray);
  }

  guardar(){
    let txtAntePatologicos = this.txtAntePatologicos;
    let txtAnteQuirurgicos = this.txtAnteQuirurgicos;
    let txtAnteTraumaticos = this.txtAnteTraumaticos;
    console.log(txtAntePatologicos, txtAnteQuirurgicos, txtAnteTraumaticos);

    this.antecedentesPersonalesArray.push(txtAntePatologicos,txtAnteQuirurgicos,txtAnteTraumaticos);
    console.log(this.antecedentesPersonalesArray);
  }

  getDiagnosticos(argumento) {
    this._medicoService.getDiagnosticos(argumento).subscribe( (response) => {
      // console.log(response);
      this.diagnosticos = response;
      console.log(this.diagnosticos);
    }, (err) => {
      // console.log(err);
    });
  }

  guardarConsulta(){

    let causa = this.causa;
    let enfermedad = this.enfermedad;

    console.log(causa, enfermedad);
    
  }

  guardarAntecedenteF(){

   let antecedeneFCombo = this.antecedentesFMultiCtrl.value;
   let antecedenteOtro = this.txtOtroAntecedente;

   

   console.log(antecedenteOtro,antecedeneFCombo);

   
  }

  ngAfterViewInit() {
    this.setInitialValue();
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

        this.multiSelect.compareWith = (a: AntecedentesF, b: AntecedentesF) => a && b && a.id === b.id;
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
      this.AntecedentesF.filter(AntecedentesF => AntecedentesF.nombre.toLowerCase().indexOf(search) > -1)
    );
  }
 

  // tpDatos() {
  //   let Cardio = { nombre: 'Cardiopatías', disponible: true };
  //   let Diab = { nombre: 'Diabetes', disponible: true };
  //   let Hiper = { nombre: 'Hipertensión', disponible: true };
  //   let Asma = { nombre: 'Asma', disponible: true };
  //   let Psiqui = { nombre: 'Enfermedad Psiquiátrica', disponible: true };
  //   let Enfi = { nombre: 'Enfisema', disponible: true };
  //   let Cancer = { nombre: 'Cáncer', disponible: true };
  //   let Epilepsia = { nombre: 'Epilepsia', disponible: true };

  //   let antecedentesF = [Cardio, Diab, Hiper, Asma, Psiqui, Enfi, Cancer, Epilepsia];

  //   for (var i = 0; i < antecedentesF.length; i++) {
  //     let antF = antecedentesF[i];
  //     this.listaAntecedentesF.push({antF});
  //   }
  // }



  revisionSistemas(){
    let cardioRes = {id:1,nombre:'Cardio-Respiratorio', variable:this.varCardio, descripcion:this.descripcionCardio};
    let vascular = {id:2,nombre:'Vascular', variable:this.varVascular, descripcion:this.descripcionVascular};
    let gastro = {id:3,nombre:'Gastro Intestinal', variable:this.varGastro, descripcion:this.descripcionGastro};
    let genito = {id:4,nombre:'Genito-Urinario', variable:this.varGenito, descripcion:this.descripcionGenito};
    let endo = {id:5,nombre:'Endocrino', variable:this.varEndo, descripcion:this.descripcionEndo};
    let osteo = {id:6,nombre:'Osteomuscular', variable:this.varOsteo, descripcion:this.descripcionOsteo};
    let neuro = {id:7,nombre:'Neurológico', variable:this.varNeuro, descripcion:this.descripcionNeuro};
    let piel = {id:8,nombre:'Piel y Faneras', variable:this.varPiel, descripcion:this.descripcionPiel};

    this.sistema.push(cardioRes,vascular,gastro,genito,endo,osteo,neuro,piel);
   }



   examenMedico(){
    let cabeza = {nombre:'Cabeza', variable:this.varCabeza, descripcion:this.descripcionCabeza};
    let ojos = {nombre:'Ojos', variable:this.varOjos, descripcion:this.descripcionOjos};
    let oidos = {nombre:'Oidos', variable:this.varOidos, descripcion:this.descripcionOidos};
    let nariz = {nombre:'Nariz', variable:this.varNariz, descripcion:this.descripcionNariz};
    let boca = {nombre:'Boca', variable:this.varBoca, descripcion:this.descripcionBoca};
    let cuello = {nombre:'Cuello', variable:this.varCuello, descripcion:this.descripcionCuello};
    let torax = {nombre:'Tórax Mama', variable:this.varTorax, descripcion:this.descripcionTorax};
    let pulmones = {nombre:'Pulmones', variable:this.varPulmones, descripcion:this.descripcionPulmones};
    let corazon = {nombre:'Corazón', variable:this.varCorazon, descripcion:this.descripcionCorazon};
    let abdomen = {nombre:'Abdomen', variable:this.abdomen, descripcion:this.descripcionAbdomen};
    let genitoUrinario = {nombre:'GenitoUrinario', variable:this.varGenitoUrinario, descripcion:this.descripcionGenitoUrinario};
    let columna = {nombre:'Columna', variable:this.varColumna, descripcion:this.descripcionColumna};
    let extremidades = {nombre:'Extremidades', variable:this.varExtremidades, descripcion:this.descripcionExtremidades};
    let neurologico = {nombre:'Neurológico', variable:this.varNeurologico, descripcion:this.descripcionNeurologico};
    let faneras = {nombre:'Faneras', variable:this.varOsteo, descripcion:this.descripcionOsteo};
    
    this.examen.push(cabeza,ojos,oidos,nariz,boca,cuello,torax,pulmones,corazon,abdomen,genitoUrinario,columna,extremidades,neurologico,faneras);
   }

  habitosyRiesgos(){

    let Cigarrillo = { nombre: 'Cigarrillo', disponible: true };
    let Alcohol = { nombre: 'Alcohol', disponible: true };
    let Estres = { nombre: 'Estrés', disponible: true };
    let Humo = { nombre: 'Humo', disponible: true };
    let Polvo = { nombre: 'Polvo', disponible: true };
    let habitos = [Cigarrillo, Alcohol, Estres, Humo, Polvo];

    for (var i = 0; i < habitos.length; i++) {
      let hyfr = habitos[i];
      this.listaHabitos.push({hyfr});
    }
   
  }
  

  // diagnostico(){
  //   let diag1 =  {id: "1", descripcion: "Fumador", codigo: "510" };
  //   let diag2 =  {id: "2", descripcion: "Sufre de presión arterial", codigo: "8220" };
  //   let diag3 =  {id: "3", descripcion: "Sufre de presión arterial", codigo: "5320" };

  //   let diagnosticos = [diag1,diag2,diag3];

      
    
  //   for(var i = 0 ; i < diagnosticos.length; i++)
  //   {
      
  //     let diag = diagnosticos[i];
  //     this.listaDiagnosticos.push({diag});
  //   }
   
  // }

// guardarDiagnostico(){
 
//   console.log(this.descripcionDiag);

//   let nuevo = {id: "-" ,descripcion: this.descripcionDiag, codigo:this.codDiag};
//   let diagnosticos = [nuevo];

//   for(var i = 0 ; i < diagnosticos.length; i++)
//   {
//     let diag = diagnosticos[i];
//     this.listaDiagnosticos.push({diag});
   
//   }
//   this.descripcionDiag = "";
//   this.codDiag = "";
// }

// editarDiagnostico(descripcionDiag,codDiag){

//   console.log(descripcionDiag.codigo);

//   this.descripcionDiag = descripcionDiag.descripcion;
//   this.codDiag = descripcionDiag.descripcion;
// }

  validaciones(){

    this.datos = this.formBuilder.group({
      menarquia : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      gravidez : ['', [Validators.pattern('[a-z A-z ñ] * || [0-9]')]],
      partos : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      abortos : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      hijosVivos : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      planificacion : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],

      cigarrillo : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      alcohol : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      estres : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      humo : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      polvo : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      otros : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      control: ['',[Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      dias: ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],

     
      frecuenciaCardiaca : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      temperatura : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      frecuenciaRespiratoria : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      talla : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      presion : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
      peso : ['', [Validators.pattern('[a-z A-z ñ]* || [0-9]')]],
    });
  }

 
  agruparAntecedentesF(ev) {
    this.grupoAntecedentesF = ev.value;
  }

 agruparHabitos(ev) {
    this.grupoHabitos = ev.value;
  }

  prueba(ev){
    console.log(ev);
    this.getDiagnosticos(ev.target.value);
  }

  checkRevisionSistema(ev, tipo){ 
    console.log(tipo);
    let valor = true;
    let identificador = 0;

    switch(valor === true){
      case (tipo === 'Cardio-Respiratorio') : 
      this.sistema[0].variable = ev.checked;
      break;
      case (tipo === 'Vascular') : 
      this.sistema[1].variable = ev.checked;
      break;
      case (tipo === 'Gastro Intestinal') : 
      this.sistema[2].variable = ev.checked;
      break;
      case (tipo === 'Genito-Urinario') : 
      this.sistema[3].variable = ev.checked;
      break;
      case (tipo === 'Endocrino') : 
      this.sistema[4].variable = ev.checked;
      break;
      case (tipo === 'Osteomuscular') : 
      this.sistema[5].variable = ev.checked;
      break;
      case (tipo === 'Neurológico') : 
      this.sistema[6].variable = ev.checked;
      break;
      case (tipo === 'Piel y Faneras') : 
      this.sistema[7].variable = ev.checked;
      break;
    }
  }


  
  checkExamenMedico(ev, tipo){ 
    console.log(tipo);
    let valor = true;
    switch(valor === true){
      case (tipo === 'Cabeza') : 
      this.examen[0].variable = ev.checked;
      break;
      case (tipo === 'Ojos') : 
      this.examen[1].variable = ev.checked;
      break;
      case (tipo === 'Oidos') : 
      this.examen[2].variable = ev.checked;
      break;
      case (tipo === 'Nariz') : 
      this.examen[3].variable = ev.checked;
      break;
      case (tipo === 'Boca') : 
      this.examen[4].variable = ev.checked;
      break;
      case (tipo === 'Cuello') : 
      this.examen[5].variable = ev.checked;
      break;
      case (tipo === 'Tórax Mama') : 
      this.examen[6].variable = ev.checked;
      break;
      case (tipo === 'Pulmones') : 
      this.examen[7].variable = ev.checked;
      break;
      case (tipo === 'Corazón') : 
      this.examen[8].variable = ev.checked;
      break;
      case (tipo === 'Abdomen') : 
      this.examen[9].variable = ev.checked;
      break;
      case (tipo === 'GenitoUrinario') : 
      this.examen[10].variable = ev.checked;
      break;
      case (tipo === 'Columna') : 
      this.examen[11].variable = ev.checked;
      break;
      case (tipo === 'Extremidades') : 
      this.examen[12].variable = ev.checked;
      break;
      case (tipo === 'Neurológico') : 
      this.examen[13].variable = ev.checked;
      break;
      case (tipo === 'Faneras') : 
      this.examen[14].variable = ev.checked;
      break;

      

    }
  }

}

export interface AntecedentesF{
  id : string;
  nombre : string;
  disponible : string;
}

export interface AntecedentesFGroup{
  nombre : string; 
  disponible : string;
  antecedentesF: AntecedentesF[];
}

export const ANTECEDENTESF : AntecedentesF[] = [
  {nombre: 'Cardiopatías', disponible:'true', id: '1'},
  {nombre: 'Diabetes', disponible:'true', id: '2'},
  {nombre: 'Hipertensión', disponible:'true', id: '3'},
  {nombre: 'Asma', disponible:'true', id: '4'},
  {nombre: 'Enfermedad Psiquiátrica', disponible:'true', id: '5'},
  {nombre: 'Enfisema', disponible:'true', id: '6'},
  {nombre: 'Cáncer', disponible:'true', id: '7'},
  {nombre: 'Epilepsia', disponible:'true', id: '8'},
];

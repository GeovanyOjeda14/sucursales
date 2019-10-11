import { Component, OnInit, Input } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-historia-optometria',
  templateUrl: './historia-optometria.component.html',
  styleUrls: ['./historia-optometria.component.css']
})
export class HistoriaOptometriaComponent implements OnInit {
  @Input() id_usuario: string;
  @Input() id_servicio: string;


  public datosOptometria: FormGroup;
  public infoHcFb;
  public loading;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validacionesFormOptometria();
  }

  validacionesFormOptometria(){
    this.datosOptometria = this.formBuilder.group({

      tipoConsulta : ['', [Validators.required]],
      motivoConsulta : ['', [Validators.required]],
      antecedentes : ['', [Validators.required]],
      lensometriaOd : ['', [Validators.required]],
      lensometriaOi : ['', [Validators.required]],
      agudezaVisualOd : ['', [Validators.required]],
      agudezaVisualOi : ['', [Validators.required]],
      visionLejanaOd : ['', [Validators.required]],
      visionLejanaOi : ['', [Validators.required]],
      visionCercanaOd : ['', [Validators.required]],
      visionCercanaOi : ['', [Validators.required]],
      adicion : ['', [Validators.required]],
      tipoLente : ['', [Validators.required]],
      examenExternoOd : ['', [Validators.required]],
      examenExternoOi : ['', [Validators.required]],
      oftalmologiaOd : ['', [Validators.required]],
      oftalmologiaOi : ['', [Validators.required]],
      examenMotorOd : ['', [Validators.required]],
      examenMotorOi : ['', [Validators.required]],
      queratometriaOd : ['', [Validators.required]],
      queratometriaOi : ['', [Validators.required]],
      refracionOd : ['', [Validators.required]],
      refracionOi : ['', [Validators.required]],
      formulaFinalOd : ['', [Validators.required]],
      formulaFinalOi : ['', [Validators.required]],
      avvlOd : ['', [Validators.required]],
      avvlOi : ['', [Validators.required]],
      avvpOd : ['', [Validators.required]],
      avvpOi : ['', [Validators.required]],
      adicionOd : ['', [Validators.required]],
      adicionOi : ['', [Validators.required]],
      dnpOd : ['', [Validators.required]],
      dnpOi : ['', [Validators.required]],
      testIshihara : ['', [Validators.required]],
      testEstereopsis : ['', [Validators.required]],
      diagnosticoInicial : ['', [Validators.required]],
      conducta : ['', [Validators.required]],
      medicamentos : ['', [Validators.required]],
      remision : ['', [Validators.required]],
      observaciones : ['', [Validators.required]],
      rips : [''],


      // Datos refracion y formular fina
      // refraccion ojo derecho
      selectOdRefraccion : ['', [Validators.required]],
      esferaRefraccion : ['', [Validators.required]],
      selectRefracion1 : ['', [Validators.required]],
      cilindroRefracion : ['', [Validators.required]],
      selectRefracion2 : ['', [Validators.required]],
      ejeRefracion : ['', [Validators.required]],

      // refraccion ojo izquierdo
      selectOiRefraccion : ['', [Validators.required]],
      esferaRefraccionoi : ['', [Validators.required]],
      selectRefracion1Oi : ['', [Validators.required]],
      cilindroRefracionOi : ['', [Validators.required]],
      selectRefracion2Oi : ['', [Validators.required]],
      ejeRefracionOi : ['', [Validators.required]],


      // Formula final Ojo derecho
      selectOdFormulaFinal : ['', [Validators.required]],
      esferaFormulaFinalOd : ['', [Validators.required]],
      selecFormulaFinal1Od : ['', [Validators.required]],
      cilindrFormulaFinalOd : ['', [Validators.required]],
      selecFormulaFinal2Od : ['', [Validators.required]],
      ejFormulaFinalOd: ['', [Validators.required]],

      // Formula final Ojo Izquierdo
      selectOiFormulaFinal : ['', [Validators.required]],
      esferaFormulaFinalOi : ['', [Validators.required]],
      selecFormulaFinal1Oi : ['', [Validators.required]],
      cilindrFormulaFinalOi : ['', [Validators.required]],
      selecFormulaFinal2Oi : ['', [Validators.required]],
      ejFormulaFinalOi: ['', [Validators.required]],

      // option adicion
      adicionOption : ['', [Validators.required]]

    });
  }

  formOptometria(){
    this.loading = true;

    let adicion = '+' + ' ' + this.datosOptometria.value.adicion;
    // console.log('adocion' + adicion);

    // this.datosOptometria.value.selectRefracion1 this.datosOptometria.value.selectRefracion2
    let refraccionOd = this.datosOptometria.value.selectOdRefraccion + ' ' + this.datosOptometria.value.esferaRefraccion +
    ' ' + '-' + ' ' + this.datosOptometria.value.cilindroRefracion + ' ' +
     'X' + ' ' + this.datosOptometria.value.ejeRefracion;

    //  this.datosOptometria.value.selectRefracion1Oi this.datosOptometria.value.selectRefracion2Oi
    let refraccionOi = this.datosOptometria.value.selectOiRefraccion + ' ' + this.datosOptometria.value.esferaRefraccionoi +
    ' ' + '-' + ' ' + this.datosOptometria.value.cilindroRefracionOi + ' ' + 'X'
     + ' ' + this.datosOptometria.value.ejeRefracionOi;

    //  this.datosOptometria.value.selecFormulaFinal1Od this.datosOptometria.value.selecFormulaFinal2Od
    let ffod = this.datosOptometria.value.selectOdFormulaFinal + ' ' + this.datosOptometria.value.esferaFormulaFinalOd +
    ' ' + '-' + ' ' + this.datosOptometria.value.cilindrFormulaFinalOd + ' ' + 'X'
     + ' ' + this.datosOptometria.value.ejFormulaFinalOd;

    //  this.datosOptometria.value.selecFormulaFinal1Oi this.datosOptometria.value.selecFormulaFinal2Oi
    let ffoi = this.datosOptometria.value.selectOiFormulaFinal + ' ' + this.datosOptometria.value.esferaFormulaFinalOi +
    ' ' + '-' + ' ' + this.datosOptometria.value.cilindrFormulaFinalOi + ' ' +
    'X' + ' ' + this.datosOptometria.value.ejFormulaFinalOi;

    // console.log ('refraccion od ' + refraccionOd);
    // console.log ('refraccion oi ' + refraccionOi);
    // console.log ('ff od ' + ffod);
    // console.log ('ff oi ' + ffoi);

      this.infoHcFb = {motivoConsulta: this.datosOptometria.value.motivoConsulta,
      antecedentes : this.datosOptometria.value.antecedentes, lensometriaOd : this.datosOptometria.value.lensometriaOd,
      lensometriaOi : this.datosOptometria.value.lensometriaOi, agudezaVisualOd : this.datosOptometria.value.agudezaVisualOd,
      agudezaVisualOi : this.datosOptometria.value.agudezaVisualOi, visionLejanaOd : this.datosOptometria.value.visionLejanaOd,
      visionLejanaOi : this.datosOptometria.value.visionLejanaOi, visionCercanaOd : this.datosOptometria.value.visionCercanaOd,
      visionCercanaOi : this.datosOptometria.value.visionCercanaOi, adicion : adicion, tipoLente : this.datosOptometria.value.tipoLente,
      examenExternoOd : this.datosOptometria.value.examenExternoOd, examenExternoOi : this.datosOptometria.value.examenExternoOi,
      oftalmologiaOd : this.datosOptometria.value.oftalmologiaOd, oftalmologiaOi : this.datosOptometria.value.oftalmologiaOi,
      examenMotorOd : this.datosOptometria.value.examenMotorOd, examenMotorOi : this.datosOptometria.value.examenMotorOi,
      queratometriaOd : this.datosOptometria.value.queratometriaOd, queratometriaOi : this.datosOptometria.value.queratometriaOi,
      refracionOd : refraccionOd, refraccionOi : refraccionOi, formulaFinalOd : ffod, formulaFinalOi : ffoi,
      avvlOd : this.datosOptometria.value.avvlOd, avvlOi : this.datosOptometria.value.avvlOi,
      avvpOd : this.datosOptometria.value.avvpOd, avvpOi : this.datosOptometria.value.avvpOi,
      adicionOd : this.datosOptometria.value.adicionOd, adicionOi : this.datosOptometria.value.adicionOi,
      dnpOd : this.datosOptometria.value.dnpOd, dnpOi : this.datosOptometria.value.dnpOi,
      testIshihara : this.datosOptometria.value.testIshihara, testEstereopsis : this.datosOptometria.value.testEstereopsis,
      diagnosticoInicial : this.datosOptometria.value.diagnosticoInicial, conducta : this.datosOptometria.value.conducta,
      medicamentos : this.datosOptometria.value.medicamentos, remision : this.datosOptometria.value.remision,
      observaciones : this.datosOptometria.value.observaciones, id_usuario: this.id_usuario, id_servicio: this.id_servicio,
      tipoConsulta: this.datosOptometria.value.tipoConsulta, rips : this.datosOptometria.value.rips};


      console.log(this.infoHcFb);
  }

}

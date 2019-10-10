import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApplicationService } from '../../services/app.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { MedicoService } from '../../services/medico.service';
import { UserService } from '../../services/user.service';
import { PlatformLocation } from '@angular/common';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-historia-general',
  templateUrl: './historia-general.component.html',
  styleUrls: ['./historia-general.component.css'],
  providers: [ApplicationService, MedicoService, UserService]
})
export class HistoriaGeneralComponent implements OnInit {
  public user;

  constructor() { }

  ngOnInit() {
    this.getInfoUser();
  }

  getInfoUser(){
    let user = localStorage.getItem('user');
    this.user = JSON.parse(user);
    console.log(this.user);
  } 

}

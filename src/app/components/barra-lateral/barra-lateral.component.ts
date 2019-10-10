import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {
  @Input() img: string;
  @Input() nombres: string;

  constructor() { }

  ngOnInit() {
  }

}

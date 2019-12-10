import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/app.service';
import { MedicoService } from '../../services/medico.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historia-general',
  templateUrl: './historia-general.component.html',
  styleUrls: ['./historia-general.component.css'],
  providers: [ApplicationService, MedicoService, UserService]
})
export class HistoriaGeneralComponent implements OnInit {
  public user;
  public idCategoria;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getInfoUser();

    this.route.params.subscribe( (categoria) => {
      // console.log(categoria);
      this.idCategoria = categoria.idCategoria;
      // console.log(this.idCategoria);
    } );
  }

  getInfoUser() {
    let user = localStorage.getItem('user');
    this.user = JSON.parse(user);
    // console.log(this.user);
  }

}

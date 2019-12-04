import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';

@Injectable()
export class DiagnosticoService {
  public url;

  constructor(public http: HttpClient, public global: Global) { 
    this.url = this.global.apiUrl;
  }

  getDiagnostico(): Observable<any> {
    return this.http.get(this.url + '/impdiagnostica');
  }

  postDiagnostico(info, token) : Observable <any>{
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/histclinica/' + '?token=' + token, info, {headers : headers});
  }


}

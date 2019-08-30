import { Injectable } from '@angular/core';
import { Global } from '../services/global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable( )
export class SucursalService {

    public url;

    constructor(public http: HttpClient, public global: Global) {
        this.url = this.global.apiUrl;
    }
    
    // Ruta para pedir informacion al logearse de la sucursal
    getIdentitySucursal(id_member): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + '/sucumem/' + id_member , {headers : headers});
    }

    // Ruta para pedir informacion de una sucursal a traves de su id
    getInfoSucursal(id_sucursal){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + '/sucursal/' + id_sucursal , {headers : headers});
    }

}

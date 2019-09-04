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

    // Ruta para pedir informacion de los servicios que pesta una sucursal
    getServiciosSucursal(id_sucursal) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + '/serviciosuc/' + id_sucursal , {headers : headers});   
    }

    // Ruta para obtener las citas sugun un servicio en la sucursal
    getEventsSucursal(mes, anio, id_serv, id_sucursal, id_cate, id_consultorio){
        // console.log('peticion ev sucu');
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + '/eventsuc/' + mes + '/' + anio + '/' + id_serv + '/'+ id_sucursal + '/' + id_cate + '/' + id_consultorio, {headers : headers} ); 
    }

    // Ruta para obtener consultorios con su medico segun el servicio de una sucursal
    getConsultoriosSegunServicio(id_sucursal, id_servicio){
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + '/consulsucse/' + id_sucursal + '/' + id_servicio  , {headers : headers} ); 
    }

    // Ruta para pedir el historial de citas de una sucursal y consultorio
    getHistorialSucursal(mes, anio, id_servicio, id_categoria, id_sucursal, id_consultorio){
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + '/histsuc/' + mes + '/' + anio + '/' + id_servicio + '/' + id_categoria + '/' + id_sucursal  + '/'  + id_consultorio, {headers : headers});
    }

    // Ruta para obtener los consultorios que hay en una sucursal
    getConsultorios(id_sucursal) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + '/consulsuc/' + id_sucursal , {headers : headers});
    }
}

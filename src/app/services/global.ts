import { Injectable } from '@angular/core';

@Injectable()
export class Global {
  public login = false;
  public id_usuario;
  public admin = false;

  // API LOCAL
  // public apiUrl = 'http://192.168.2.104:3000';

  // API DEL CIELO
  public apiUrl = 'http://cdn.prevenirexpress.com:3000';

  // API MAC
  // public apiUrl = 'http://192.168.2.105:3000';
  
  public infoPerfil = {};
  public foto;
  public nombre;
  public medico = false;
  // public nombres;
}

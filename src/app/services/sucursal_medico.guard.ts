import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class SucursalMedico implements CanActivate {

    constructor(private _userService: UserService) {

    }

    canActivate() {
        let identity = this._userService.getIdentity();

        if (identity.id_sucursales || identity.medico_id) {
            return true;
        } else  if (identity.id_provedor) {
            return false;
        }
    }
 }
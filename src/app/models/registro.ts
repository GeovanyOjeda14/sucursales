export class Registro {
    constructor(public nombre: string, public email: string, public direccion: string, public nit: string, public tel: string,
        public wsp: string, public esAdmin: boolean, public face: boolean, public pssw: string, public confirmPsw: string) {}
}

// "email":this.datos.value.email,"pssw":hashed,
//     "nombre":this.datos.value.nombre,"esAdmin":this.esAdmin,"face":this.face,
//     "direccion":this.datos.value.direccion,
//     "nit":this.datos.value.id,"tel":this.datos.value.tel,"wsp":this.datos.value.wsp

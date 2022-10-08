import { Actor } from './actor';
export class Pelicula {
    id:number;
    nombre:string;
    tipo:string;
    estreno:number;
    cantPublico:number;
    actor:string;
    foto:string;

    constructor(id:number, nombre:string, tipo:string, 
                estreno:number, cantPublico:number, 
                actor:string, foto:string){
        this.id = id;
        this.nombre =nombre;
        this.tipo = tipo;
        this.estreno = estreno;
        this.cantPublico = cantPublico;
        this.actor = actor;
        this.foto = foto;
    }

}

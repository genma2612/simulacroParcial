import { Injectable } from '@angular/core';
import { PaisesService } from './paises.service';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  arrayActores:any[];
  constructor() {
    if(!localStorage.getItem('actores')){
      let actoresPorDefecto = [{nombre:"Emilia", apellido:"Clarke", edad:35, pais:{flags:{svg:"https://flagcdn.com/gb.svg"}, translations:{spa:{common:"Reino Unido"}}}},
                               {nombre:"Javier", apellido:"Bardem", edad:53, pais:{flags:{svg:"https://flagcdn.com/es.svg"}, translations:{spa:{common:"España"}}}},
                               {nombre:"Ricardo", apellido:"Darín", edad:65, pais:{flags:{svg:"https://flagcdn.com/ar.svg"}, translations:{spa:{common:"Argentina"}}}},
                               {nombre:"Johnny", apellido:"Depp", edad:59, pais:{flags:{svg:"https://flagcdn.com/us.svg"}, translations:{spa:{common:"Estados Unidos"}}}}];
      localStorage.setItem('actores', JSON.stringify(actoresPorDefecto))
    }
  this.arrayActores = JSON.parse(localStorage.getItem('actores')!);
   }

  get ListadoDeActores(){
    return this.arrayActores;
  }

  guardarActorEnListado(actorRecibido:any){
    this.arrayActores?.push(actorRecibido);
    localStorage.setItem('actores', JSON.stringify(this.arrayActores));
  }

}

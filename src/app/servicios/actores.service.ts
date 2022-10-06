import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  arrayActores:any[];
  constructor() {
    if(!localStorage.getItem('actores')){
      let actoresPorDefecto = [{nombre:"Emilia", apellido:"Clarke", edad:35, pais:{flags:{svg:"https://flagcdn.com/gb.svg"}, capital:"London", population:67215293, translations:{spa:{common:"Reino Unido"}}}},
                               {nombre:"Javier", apellido:"Bardem", edad:53, pais:{flags:{svg:"https://flagcdn.com/es.svg"}, capital:"Madrid", population:47351567, translations:{spa:{common:"España"}}}},
                               {nombre:"Ricardo", apellido:"Darín", edad:65, pais:{flags:{svg:"https://flagcdn.com/ar.svg"}, capital:"Buenos Aires", population:45376763, translations:{spa:{common:"Argentina"}}}},
                               {nombre:"Johnny", apellido:"Depp", edad:59, pais:{flags:{svg:"https://flagcdn.com/us.svg"}, capital:"Washington, D.C.", population:329484123, translations:{spa:{common:"Estados Unidos"}}}},
                               {nombre:"Arnold", apellido:"Schwarzenegger", edad:59, pais:{flags:{svg:"https://flagcdn.com/us.svg"}, capital:"Washington, D.C.", population:329484123, translations:{spa:{common:"Estados Unidos"}}}},
                               {nombre:"Marlon", apellido:"Brando", edad:59, pais:{flags:{svg:"https://flagcdn.com/us.svg"}, capital:"Washington, D.C.", population:329484123, translations:{spa:{common:"Estados Unidos"}}}},
                               {nombre:"Sigourney", apellido:"Weaver", edad:59, pais:{flags:{svg:"https://flagcdn.com/us.svg"}, capital:"Washington, D.C.", population:329484123, translations:{spa:{common:"Estados Unidos"}}}},
                               {nombre:"Tom", apellido:"Hulce", edad:59, pais:{flags:{svg:"https://flagcdn.com/us.svg"}, capital:"Washington, D.C.", population:329484123, translations:{spa:{common:"Estados Unidos"}}}}
                              ];
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

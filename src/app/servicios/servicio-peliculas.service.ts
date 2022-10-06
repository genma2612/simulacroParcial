import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculasService {
  listadoPeliculas:any[];
  listadoPeliculasPorDefecto:any[] = 
  [{id:340, nombre:"El Padrino", tipo:"Drama", estreno:1972, cantPublico:1500, actor:"", foto:"https://thumbsnap.com/i/mebTtmC5.jpg" },
  {id:342, nombre:"Terminator", tipo:"Ciencia Ficción", estreno:1984, cantPublico:1500, actor:"", foto:"https://thumbsnap.com/i/C8rwpedw.jpg" },
  {id:741, nombre:"Alien", tipo:"Terror", estreno:1979, cantPublico:1500, actor:"", foto:"https://thumbsnap.com/i/LAL7ZV8H.jpg" },
  {id:999, nombre:"Amadeus", tipo:"Musical", estreno:1984, cantPublico:1500, actor:"", foto:"https://thumbsnap.com/i/hk6zkQro.jpg"}];

  constructor(private httpClient: HttpClient) {
    if(!localStorage.getItem('peliculas')){
      localStorage.setItem('peliculas', JSON.stringify(this.listadoPeliculasPorDefecto))
    }
  this.listadoPeliculas = JSON.parse(localStorage.getItem('peliculas')!);
   }

  get ListadoDePeliculas(){
    return this.listadoPeliculas;
  }

  guardarActorEnListado(peliculaRecibida:any){
    this.listadoPeliculas?.push(peliculaRecibida);
    localStorage.setItem('peliculas', JSON.stringify(this.listadoPeliculas));
  }


  public fileExists(url: string): Observable<boolean> {
    return this.httpClient.get(url).pipe(map(() => true), catchError(() => of(false)));
}
}

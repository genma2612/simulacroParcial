import { Pelicula } from './../clases/pelicula';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { doc, Firestore, setDoc, collection } from "firebase/firestore";
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculasService {
  listadoPeliculas:any[];
  listadoPeliculasPorDefecto:Pelicula[] = 
  [{id:340, nombre:"El Padrino", tipo:"Drama", estreno:1972, cantPublico:1500, actor:"Marlon Brando", foto:"https://thumbsnap.com/i/mebTtmC5.jpg" },
  {id:342, nombre:"Terminator", tipo:"Ciencia Ficción", estreno:1984, cantPublico:1500, actor:"Arnold Schwarzenegger", foto:"https://thumbsnap.com/i/C8rwpedw.jpg" },
  {id:741, nombre:"Alien", tipo:"Terror", estreno:1979, cantPublico:1500, actor:"Sigourney Weaver", foto:"https://thumbsnap.com/i/LAL7ZV8H.jpg" },
  {id:741, nombre:"Charly y la Fabrica de Chocolates", tipo:"Musical", estreno:1979, cantPublico:1500, actor:"Johnny Depp", foto:"https://thumbsnap.com/i/LAL7ZV8H.jpg" },
  {id:693, nombre:"El Jóven Manos de Tijeras", tipo:"Terror", estreno:1979, cantPublico:1500, actor:"Johnny Depp", foto:"https://thumbsnap.com/i/LAL7ZV8H.jpg" },
  {id:287, nombre:"Piratas del Caribe", tipo:"Aventura", estreno:1979, cantPublico:1500, actor:"Johnny Depp", foto:"https://thumbsnap.com/i/LAL7ZV8H.jpg" },
  {id:578, nombre:"9 Reinas", tipo:"Drama", estreno:1979, cantPublico:1500, actor:"Ricardo Darín", foto:"https://thumbsnap.com/i/LAL7ZV8H.jpg" },
  {id:578, nombre:"El Secreto de sus Ojos", tipo:"Terror", estreno:1979, cantPublico:1500, actor:"Ricardo Darín", foto:"https://thumbsnap.com/i/LAL7ZV8H.jpg" },
  {id:999, nombre:"Amadeus", tipo:"Musical", estreno:1984, cantPublico:1500, actor:"Tom Hulce", foto:"https://thumbsnap.com/i/hk6zkQro.jpg"}];

  constructor(private httpClient: HttpClient, private firestore: AngularFirestore) {
    if(!localStorage.getItem('peliculas')){
      localStorage.setItem('peliculas', JSON.stringify(this.listadoPeliculasPorDefecto))
    }
    this.listadoPeliculas = JSON.parse(localStorage.getItem('peliculas')!);
    this.listadoPeliculas.forEach(element => {
      this.firestore.collection('peliculas').doc(element.id.toString()).set(JSON.parse(JSON.stringify(element)))
      .catch((error) => {
        console.log(error);
      })
    });
   }

  get ListadoDePeliculas(){
    return this.listadoPeliculas;
  }

  get ListadoDePeliculasFirebase(){
    return this.firestore.collection("peliculas").get();
  }

  guardarActorEnListado(peliculaRecibida:any){
    this.listadoPeliculas?.push(peliculaRecibida);
    localStorage.setItem('peliculas', JSON.stringify(this.listadoPeliculas));
  }


  public fileExists(url: string): Observable<boolean> {
    return this.httpClient.get(url).pipe(map(() => true), catchError(() => of(false)));
}
}

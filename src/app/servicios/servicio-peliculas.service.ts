import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculasService {
  listadoPeliculas:any[] = 
  [{id:340, nombre:"El Padrino", tipo:"Drama", estreno:1972, cantPublico:1500, foto:"../../../assets/images/340.jpg" },
  {id:342, nombre:"Terminator", tipo:"Ciencia Ficción", estreno:1984, cantPublico:1500, foto:"../../../assets/images/342.jpg" },
  {id:741, nombre:"Alien", tipo:"Terror", estreno:1979, cantPublico:1500, foto:"../../../assets/images/741.jpg" },
  {id:999, nombre:"Amadeus", tipo:"Musical", estreno:1984, cantPublico:1500, foto:"../../../assets/images/999.jpg" }];
  defaultPic = "https://cdn.pixabay.com/photo/2016/03/31/18/39/generic-1294538_960_720.png";

  constructor(private httpClient: HttpClient) { }

  get ListadoDePeliculas(){
    return this.listadoPeliculas;
  }


  public fileExists(url: string): Observable<boolean> {
    return this.httpClient.get(url).pipe(map(() => true), catchError(() => of(false)));
}
}

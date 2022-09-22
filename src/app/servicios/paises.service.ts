import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private url = "https://restcountries.com/v3.1/alpha?codes=";
  private paises: any;
  constructor(private http: HttpClient) { }


  traerPaises(codigoPaises:string) {
    return this.http.get(this.url+codigoPaises);
    /*
    this.http.get(this.url+this.codPaises).subscribe( response => {
      this.paises = response;
      console.log(this.paises);
      return this.paises;
    })
  */
  }

}
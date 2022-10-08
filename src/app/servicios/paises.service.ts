import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  elemento:any;
  private url = "https://restcountries.com/v3.1/alpha?codes=";
  constructor(private http: HttpClient) { 
    
  }


  traerPaises(codigoPaises:string) {
    return this.http.get(this.url+codigoPaises);
  }

  traerUnPais(codigoPais:string){
    this.http.get(this.url+codigoPais).subscribe(result => { 
      this.elemento = result;
      delay(1000);
      console.log(this.elemento);
      return this.elemento;
    });
  }

}
import { Component, OnInit } from '@angular/core';
import { PeliculaListadoComponent } from '../peliculas/pelicula-listado/pelicula-listado.component';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  listadoPeliculas:any[];
  peliculaActiva:any={};
  peliculas = new PeliculaListadoComponent();
  constructor() { 
    this.listadoPeliculas = this.traerPeliculas();
  }

  ngOnInit(): void {
  }

  tomoPeliculaSeleccionada($event:any){

  }

  traerPeliculas(){
    return this.peliculas.mandarPeliculas();
  }

}

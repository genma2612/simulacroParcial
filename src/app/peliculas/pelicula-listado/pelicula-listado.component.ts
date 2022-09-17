import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  @Input() listadoRecibido?:any[];
  @Output() seleccioneUnaPelicula:EventEmitter<any> = new EventEmitter<any>();

  constructor(private servicioPeliculas: ServicioPeliculasService) {
  }

  ngOnInit(): void {
  }

  seleccionarPelicula(seleccion:any){
    this.seleccioneUnaPelicula.emit(seleccion);
  }

  listadoPeliculas(){
    return this.servicioPeliculas.ListadoDePeliculas;
  }

}

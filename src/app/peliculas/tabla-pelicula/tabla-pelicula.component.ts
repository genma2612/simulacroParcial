import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() listadoRecibido?:any[];
  @Output() seleccioneUnaPelicula:EventEmitter<any> = new EventEmitter<any>();
  peliculaActiva = {};

  constructor(private servicioPeliculas:ServicioPeliculasService) {}

  ngOnInit(): void {
  }

  seleccionarPelicula(seleccion:any){
    this.seleccioneUnaPelicula.emit(seleccion);
  }

  tieneImagen(url:string){
    return this.servicioPeliculas.fileExists(url);
  }

}

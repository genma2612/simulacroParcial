import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/clases/pelicula';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() listadoRecibido?:Observable<Pelicula[] | undefined>;
  @Output() seleccioneUnaPelicula:EventEmitter<any> = new EventEmitter<any>();
  peliculaActiva = {};
  caso = ['ver','modificar','borrar'];
  constructor(private servicioPeliculas:ServicioPeliculasService) {}

  ngOnInit(): void {
  }

  seleccionarPelicula($event:any){
    this.seleccioneUnaPelicula.emit($event);
  }

  tieneImagen(url:string){
    return this.servicioPeliculas.fileExists(url);
  }

}

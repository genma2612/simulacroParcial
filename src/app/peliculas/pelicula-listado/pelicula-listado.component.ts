import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Observable } from 'rxjs';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  @Input() listadoRecibido?:Observable<Pelicula[] | undefined>;
  @Output() seleccioneUnaPelicula:EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  caso = ['ver','modificar','borrar'];
  constructor(private servicioPeliculas: ServicioPeliculasService) {
  }

  ngOnInit(): void {
  }

  seleccionarPelicula($event:any){
    this.seleccioneUnaPelicula.emit($event);
  }

  listadoPeliculas(){
    return this.servicioPeliculas.ListadoDePeliculas;
  }

}

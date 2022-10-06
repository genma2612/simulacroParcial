import { Component, OnInit, Input } from '@angular/core';
import { ActoresService } from 'src/app/servicios/actores.service';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
  pais:any;
  actor:any;
  peliculas:any[] | null = null;
  constructor(private servActores:ActoresService, private servPeliculas:ServicioPeliculasService) { }

  ngOnInit(): void {
  }

  listadoDeActores(){
    return this.servActores.ListadoDeActores;
  }

  listadoDePeliculas(){
    return this.servPeliculas.ListadoDePeliculas;
  }

  seleccionarPais($event:any){
    this.pais = $event;
  }

  seleccionarActor($event:any){
    this.actor = $event;
  }

  seleccionarPeliculas($event:any){
    this.peliculas = $event;
  }

}

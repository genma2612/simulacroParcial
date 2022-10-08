import { PelisFireService } from './../servicios/pelis-fire.service';
import { Pelicula } from './../clases/pelicula';
import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { ActoresService } from '../servicios/actores.service';
import { ServicioPeliculasService } from '../servicios/servicio-peliculas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  @Input() recibirActor?:any;
  @Output() enviarActor:EventEmitter<any> = new EventEmitter<any>();
  elementoActivo:any= null;
  queMuestro:string = 'actores';
  actorTemp:any;
  pelisFire$?:Observable<Pelicula[]>;
  test:any;

  constructor(private servicioPeliculas: ServicioPeliculasService, 
    private servicioActores: ActoresService,
    private readonly servicioFire: PelisFireService) {
      this.pelisFire$ = servicioFire.getAll();
      this.test = servicioFire.getPelicula("9swL8n9pZBxh9RIQDrYt");

  }

  comoVer:string="Tabla";
  tipoDeBoton:string='btn-info';


  ngOnInit(): void {
  }

  tomoPeliculaSeleccionada($event:any){
    this.elementoActivo=$event;
  }

  listadoDePeliculas(){
    return this.servicioPeliculas.ListadoDePeliculas;
  }

  listadoDeActores(){
    return this.servicioActores.ListadoDeActores;
  }

  CambiarLaVista(){
    if(this.comoVer == 'Lista'){
        this.comoVer = 'Tabla';
        this.tipoDeBoton = 'btn-info';
    }
    else{
      this.comoVer = 'Lista';
      this.tipoDeBoton = 'btn-danger';
    }
  }

  mostrar(param:string){
    this.queMuestro = param;
  }

  guardarActor($event:any){
    console.info("Actor:", $event);
    this.servicioActores.guardarActorEnListado($event);
  }

}

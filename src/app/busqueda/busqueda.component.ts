import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { ActoresService } from '../servicios/actores.service';
import { ServicioPeliculasService } from '../servicios/servicio-peliculas.service';

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
  constructor(private servicioPeliculas: ServicioPeliculasService, private servicioActores: ActoresService) {}

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

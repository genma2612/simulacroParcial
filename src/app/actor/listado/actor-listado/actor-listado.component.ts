import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  @Input() actorRecibido:any;
  @Input() arrayActores?:any[];
  @Output() seleccioneUnActor:EventEmitter<any> = new EventEmitter<any>();

  selectedRow = "";
  currentRowNumber = 0;
  /*
  arrayActores:any[];
  actoresPorDefecto = [{nombre:"Emilia", apellido:"Clarke", edad:35, pais:"Reino Unido"},
                       {nombre:"Javier", apellido:"Bardem", edad:53, pais:"España"},
                       {nombre:"Ricardo", apellido:"Darín", edad:65, pais:"Argentina"},
                       {nombre:"Johnny", apellido:"Depp", edad:59, pais:"Estados Unidos"}];

  constructor() {
    if(!localStorage.getItem('actores'))
      localStorage.setItem('actores', JSON.stringify(this.actoresPorDefecto))
    this.arrayActores = JSON.parse(localStorage.getItem('actores')!);
  }
*/
  ngOnInit(): void {
    }

  seleccionarActor(seleccion:any){
    this.seleccioneUnActor.emit(seleccion);
  }

  guardarActorEnListado(){
    this.arrayActores?.push(this.actorRecibido);
    localStorage.setItem('actores', JSON.stringify(this.arrayActores));
  }

  listadoActores(){
    //return this.servicioPeliculas.ListadoDePeliculas;
  }

  mostrarClickeado($event: any, index:number) {
    this.currentRowNumber = index;
    this.seleccionarActor($event);
    //this.enviarPais.emit($event);
    console.log($event);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  @Input() paisRecibido?:any[];
  @Output() enviarActor:EventEmitter<any>=new EventEmitter<any>;

  nuevoActor:any = {};
  nombre:string = "";
  apellido:string = "";
  edad?:number;
  paisSeleccionado:string = "Pais";

  constructor() { }

  ngOnInit(): void {
  }

  actualizarPais($event:string){
    this.paisSeleccionado = $event;
  }

  guardarActor(){
    this.nuevoActor= {};
    this.nuevoActor.nombre=this.nombre;
    this.nuevoActor.apellido=this.apellido;
    this.nuevoActor.edad=this.edad;
    this.nuevoActor.pais=this.paisSeleccionado;
    this.enviarActor.emit(this.nuevoActor);
  }

}

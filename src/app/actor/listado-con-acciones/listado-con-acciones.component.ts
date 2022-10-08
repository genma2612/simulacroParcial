import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-con-acciones',
  templateUrl: './listado-con-acciones.component.html',
  styleUrls: ['./listado-con-acciones.component.css']
})
export class ListadoConAccionesComponent implements OnInit {

  @Input() actorRecibido: any;
  @Input() arrayActores?: any[];
  @Input() arrayPeliculas?: any[];
  @Output() enviarPais: EventEmitter<any> = new EventEmitter<any>();
  @Output() enviarActor: EventEmitter<any> = new EventEmitter<any>();
  @Output() enviarPeliculas: EventEmitter<any> = new EventEmitter<any>();

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

  guardarActorEnListado() {
    this.arrayActores?.push(this.actorRecibido);
    localStorage.setItem('actores', JSON.stringify(this.arrayActores));
  }

  listadoActores() {
    //return this.servicioPeliculas.ListadoDePeliculas;
  }

  emitirPais(pais: any) {
    this.enviarPais.emit(pais);
  }

  emitirActor(actor: any) {
    this.enviarActor.emit(actor);
  }

  emitirPeliculas(nombre: string, apellido: string) {
    let nombreActor = nombre + " " + apellido;
    //console.info(this.buscarPeliculas(nombreActor));
    this.enviarPeliculas.emit(this.buscarPeliculas(nombreActor));
  }

  buscarPeliculas(nombre: string) {
    let arrayTemp:any[] = [];
    if (this.arrayPeliculas != undefined) {
      for (let peli of this.arrayPeliculas) {
        if (peli.actor == nombre) {
          arrayTemp.push(peli);
        }
      }
    }
    if(arrayTemp.length > 0)
      return arrayTemp;
    else
      return null;
  }
  
}

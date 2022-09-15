import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() listadoRecibido?:any[];
  @Output() seleccioneUnaPelicula:EventEmitter<any> = new EventEmitter<any>();
  listadoPeliculas:any[];
  peliculaActiva = {};


  constructor() { 
    this.listadoPeliculas = [
      {id:340, nombre:"El Padrino", tipo:"Drama", fechaEstreno:"22/10/2005", cantPublico:1500, foto:"..." },
      {id:555, nombre:"Alien", tipo:"Ciencia Ficción", fechaEstreno:"22/10/2005", cantPublico:1500, foto:"..." },
      {id:342, nombre:"Terminator", tipo:"Ciencia Ficción", fechaEstreno:"22/10/2005", cantPublico:1500, foto:"..." },
      {id:369, nombre:"La Máscara", tipo:"Comedia", fechaEstreno:"22/10/2005", cantPublico:1500, foto:"..." },
      {id:741, nombre:"It", tipo:"Terror", fechaEstreno:"22/10/2005", cantPublico:1500, foto:"..." },
      {id:852, nombre:"Orgullo y Prejuicio", tipo:"Romántica", fechaEstreno:"22/10/2005", cantPublico:1500, foto:"..." },
      {id:357, nombre:"1984", tipo:"Ciencia Ficción", fechaEstreno:"22/10/2005", cantPublico:1500, foto:"..." },
      {id:999, nombre:"The Wall", tipo:"Musical", fechaEstreno:"22/10/2005", cantPublico:1500, foto:"..." },
      {id:666, nombre:"Lalaland", tipo:"Musical", fechaEstreno:"22/10/2005", cantPublico:1500, foto:"..." }
    ]
  }

  ngOnInit(): void {
  }

  seleccionarPelicula(seleccion:any){
    this.seleccioneUnaPelicula.emit(seleccion);
  }

}

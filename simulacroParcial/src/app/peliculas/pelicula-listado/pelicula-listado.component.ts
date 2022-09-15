import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  @Input() listadoRecibido?:any[];
  @Output() seleccioneUnaPelicula:EventEmitter<any> = new EventEmitter<any>();
  listadoPeliculas:any[];
  peliculaActiva = {};
  foto = "https://cdn.pixabay.com/photo/2016/03/31/18/39/generic-1294538_960_720.png";

  constructor() { 
    this.listadoPeliculas = [
      {id:340, nombre:"El Padrino", tipo:"Drama", fechaEstreno:"22/10/2005", cantPublico:1500, foto:this.foto },
      {id:555, nombre:"Alien", tipo:"Ciencia Ficción", fechaEstreno:"22/10/2005", cantPublico:1500, foto:this.foto },
      {id:342, nombre:"Terminator", tipo:"Ciencia Ficción", fechaEstreno:"22/10/2005", cantPublico:1500, foto:this.foto },
      {id:369, nombre:"La Máscara", tipo:"Comedia", fechaEstreno:"22/10/2005", cantPublico:1500, foto:this.foto },
      {id:741, nombre:"It", tipo:"Terror", fechaEstreno:"22/10/2005", cantPublico:1500, foto:this.foto },
      {id:852, nombre:"Orgullo y Prejuicio", tipo:"Romántica", fechaEstreno:"22/10/2005", cantPublico:1500, foto:this.foto },
      {id:357, nombre:"1984", tipo:"Ciencia Ficción", fechaEstreno:"22/10/2005", cantPublico:1500, foto:this.foto },
      {id:999, nombre:"The Wall", tipo:"Musical", fechaEstreno:"22/10/2005", cantPublico:1500, foto:this.foto },
      {id:666, nombre:"Lalaland", tipo:"Musical", fechaEstreno:"22/10/2005", cantPublico:1500, foto:this.foto }
    ]
  }

  ngOnInit(): void {
  }

  seleccionarPelicula(seleccion:any){
    this.seleccioneUnaPelicula.emit(seleccion);
  }

  mandarPeliculas(){
    return this.listadoPeliculas;
  }

}

import { Component, OnInit } from '@angular/core';
import { ServicioPeliculasService } from '../servicios/servicio-peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculaActiva:any= null;
  constructor(private servicioPeliculas: ServicioPeliculasService) {}

  comoVer:string="lista";
  tipoDeBoton:string='btn-danger';

  ngOnInit(): void {
  }

  tomoPeliculaSeleccionada($event:any){
    this.peliculaActiva=$event;
  }

  listadoDePeliculas(){
    return this.servicioPeliculas.ListadoDePeliculas;
  }

  CambiarLaVista(){
    if(this.comoVer == 'lista'){
        this.comoVer = 'tabla';
        this.tipoDeBoton = 'btn-info';
    }
    else{
      this.comoVer = 'lista';
      this.tipoDeBoton = 'btn-danger';
    }
  }

}

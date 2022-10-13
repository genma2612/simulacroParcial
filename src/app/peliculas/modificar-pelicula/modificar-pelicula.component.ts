import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PelisFireService } from 'src/app/servicios/pelis-fire.service';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {
  @Input() peliculaSeleccionada:any={};
  constructor(private servFire: PelisFireService) { }

  ngOnInit(): void {
  }

  modificar(pelicula:Pelicula){
    this.servFire.updatePelicula(pelicula);
  }

  onUpdate(pelicula:Pelicula) {
    this.servFire.updatePelicula(pelicula);
    }

}

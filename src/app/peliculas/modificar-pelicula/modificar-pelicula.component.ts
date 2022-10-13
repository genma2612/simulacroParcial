import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PelisFireService } from 'src/app/servicios/pelis-fire.service';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit, OnChanges {
  @Input() peliculaSeleccionada:any={};
  peliTemp?:any = {};
  peliSelected?:Pelicula;
  constructor(private servFire: PelisFireService) { }

  ngOnInit(): void {
  }

  modificar(pelicula:Pelicula){
    this.servFire.updatePelicula(pelicula);
  }

  onUpdate(pelicula:Pelicula) {
    this.servFire.updatePelicula(pelicula);
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.info(changes);
      this.peliTemp = changes["peliculaSeleccionada"].currentValue;
      this.peliSelected = new Pelicula(this.peliTemp.id, this.peliTemp.nombre, this.peliTemp.tipo,
        this.peliTemp.estreno, this.peliTemp.cantPublico, this.peliTemp.actor, this.peliTemp.foto);
      console.log(this.peliTemp.id);
    }

}

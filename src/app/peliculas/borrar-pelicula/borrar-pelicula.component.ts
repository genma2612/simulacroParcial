import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PelisFireService } from 'src/app/servicios/pelis-fire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.css']
})
export class BorrarPeliculaComponent implements OnInit {
  @Input() peliculaSeleccionada: any = {};
  @Output() peliculaSeleccionadaChange:EventEmitter<any> = new EventEmitter<any>();
  constructor(private servFire: PelisFireService) { }

  borrarPelicula(peli: Pelicula) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servFire.borrarPeli(peli.id);
        this.deseleccionar();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  deseleccionar(){
    this.peliculaSeleccionadaChange.emit(null);
  }

  ngOnInit(): void {
  }

}

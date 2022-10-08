import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-actor-peliculas',
  templateUrl: './detalle-actor-peliculas.component.html',
  styleUrls: ['./detalle-actor-peliculas.component.css']
})
export class DetalleActorPeliculasComponent implements OnInit {
  @Input() peliculasRecibidas?:any;

  constructor() { }

  ngOnInit(): void {
  }

}

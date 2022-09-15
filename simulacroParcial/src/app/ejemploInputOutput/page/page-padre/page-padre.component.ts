import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-padre',
  templateUrl: './page-padre.component.html',
  styleUrls: ['./page-padre.component.css']
})
export class PagePadreComponent implements OnInit {

  listadoProductos:any[];
  productoActivo:any={};

  constructor() { 
    this.listadoProductos = [
      {precio:340, marca:"Fanta", stock:135},
      {precio:350, marca:"Sprite", stock:120},
      {precio:360, marca:"Coca Cola", stock:100},
      {precio:300, marca:"Pepsi", stock:90},
      {precio:280, marca:"7-up", stock:150},
      {precio:200, marca:"Manaos", stock:500}
    ]
  }

  funcionLocal($event:any){
    this.listadoProductos.push($event);
    console.info("El dato en el principal", $event);
  }

  tomoProductoSeleccionado($event:any){
      this.productoActivo=$event;
      console.info("Evento ", $event);
  }

  ngOnInit(): void {
  }

}

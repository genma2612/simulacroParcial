import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-alta',
  templateUrl: './componente-alta.component.html',
  styleUrls: ['./componente-alta.component.css']
})
export class ComponenteAltaComponent implements OnInit {
  @Output() creamosUnProducto:EventEmitter<any>=new EventEmitter<any>;
  unProducto:any={};
  stock=0;
  marca="";
  precio=0;

  constructor() { }

  ngOnInit(): void {
  }

  guardarProducto(){
    //validaciones
    this.unProducto= {};
    this.unProducto.stock=this.stock;
    this.unProducto.marca=this.marca;
    this.unProducto.precio=this.precio;

    this.creamosUnProducto.emit(this.unProducto);
    console.info("El objeto:", this.unProducto);
  }

}

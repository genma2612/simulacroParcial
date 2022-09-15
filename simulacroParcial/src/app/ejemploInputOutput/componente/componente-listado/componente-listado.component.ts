import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-listado',
  templateUrl: './componente-listado.component.html',
  styleUrls: ['./componente-listado.component.css']
})
export class ComponenteListadoComponent implements OnInit {
  @Input() listadoRecibido?:any[];
  @Output() seleccioneUnProducto:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  seleccionarProducto(producto:any){
    this.seleccioneUnProducto.emit(producto);
    console.info("El producto seleccionado", producto);

  }

  ngOnInit(): void {
  }

}

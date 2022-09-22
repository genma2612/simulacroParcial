import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';
@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Output() enviarPais:EventEmitter<any> = new EventEmitter<any>();
  selectedRow = "";
  paises: any;
  codPaises = "ar,mx,us,es,gb,au";
  
  currentRowNumber = 0;


  constructor(private paisesServ: PaisesService) {
    this.paises = this.paisesServ.traerPaises(this.codPaises);
  }

  ngOnInit(): void {
  }

  mostrarClickeado($event: any, index:number) {
    this.currentRowNumber = index;
    this.enviarPais.emit($event.translations.spa.common);
    console.log($event.translations.spa.common);
  }

}

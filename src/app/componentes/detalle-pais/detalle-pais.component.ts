import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input() paisRecibido?:any;

  constructor() { }

  ngOnInit(): void {
  }

}

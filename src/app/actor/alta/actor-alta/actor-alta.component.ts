import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActoresService } from 'src/app/servicios/actores.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  @Input() paisRecibido?:any[];
  @Output() enviarActor:EventEmitter<any>=new EventEmitter<any>;

  public forma?: FormGroup;


  nuevoActor:any = {};
  nombre:string = "";
  apellido:string = "";
  edad?:number;
  paisSeleccionado?:any;
  nombrePais:string = 'Pais';

  constructor(private servicioActores: ActoresService){}
  /*
  constructor(private fb: FormBuilder) { 
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'sexo': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'terminos': ['', Validators.required]
    });
  }
*/
  ngOnInit(): void {

  }

  actualizarPais($event:any){
    this.paisSeleccionado = $event;
    this.nombrePais = $event.translations.spa.common;
  }

  guardarActor(){
    this.nuevoActor= {};
    this.nuevoActor.nombre=this.nombre;
    this.nuevoActor.apellido=this.apellido;
    this.nuevoActor.edad=this.edad;
    this.nuevoActor.pais=this.paisSeleccionado;
    console.log(this.nuevoActor);
    this.servicioActores.guardarActorEnListado(this.nuevoActor);
  }

    // CUSTOM VALIDATOR
    private spacesValidator(control: AbstractControl): null | object {
      const nombre = <string>control.value;
      const spaces = nombre.includes(' ');
  
      return spaces
        ? { containsSpaces: true }
        : null; 
    }

    listadoDeActores(){
      return this.servicioActores.ListadoDeActores;
    }
    

    

}

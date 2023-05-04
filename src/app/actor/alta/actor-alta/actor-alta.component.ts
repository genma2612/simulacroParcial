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

  public forma: FormGroup;
  nuevoActor:any = {};
  paisSeleccionado?:any;

  //constructor(private servicioActores: ActoresService){}
  
  constructor(private servicioActores: ActoresService, private fb: FormBuilder) { 
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'pais': ['Pais', this.hayPaisSeleccionado]
    });
    //console.info('Valor inicial país: ',this.forma.controls['pais'].value);
    this.forma.controls['pais'].disable();
  }

  ngOnInit(): void {
  }

  actualizarPais($event:any){
    this.paisSeleccionado = $event;
    this.forma.controls['pais'].setValue($event.translations.spa.common);

    }

  guardarActor(){
    this.nuevoActor= {};
    this.nuevoActor.nombre=this.forma.controls['nombre'].value;
    this.nuevoActor.apellido=this.forma.controls['apellido'].value;
    this.nuevoActor.edad=this.forma.controls['edad'].value;
    this.nuevoActor.pais=this.paisSeleccionado;
    //console.log(this.nuevoActor);
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

    private hayPaisSeleccionado(control: AbstractControl): null | object {
      const pais = <string>control.value;
      const hayPaisSeleccionado = pais !== 'Pais';
      console.info('booleano: ', hayPaisSeleccionado);
      return hayPaisSeleccionado
        ? { noHayPais: true }
        : null; 
    }

    listadoDeActores(){
      return this.servicioActores.ListadoDeActores;
    }
    

    

}

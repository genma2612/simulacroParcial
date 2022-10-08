import { Component, Input, OnInit } from '@angular/core';
import { ActoresService } from 'src/app/servicios/actores.service';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  @Input() actorRecibido?: any;


  id?: number;
  nombre?: string;
  tipo?: string;
  estreno?: number;
  publico?: number;
  actor?: any;
  actorNombre?: string;
  nombreDeArchivo?: string;
  imagenPosterURL?: string;
  imagePreview: any = '../../../../assets/images/default-placeholder.png';
  selectedFile?: any;
  nuevaPeli: any;
  loading = false;
  claseBoton = '';

  constructor(private http: HttpClient, private servicioActores: ActoresService, private servPelis: ServicioPeliculasService) {
  }

  ngOnInit(): void {
  }



  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  guardarPelicula() {
    this.loading = !this.loading;
    this.claseBoton = "disabled";
    console.log(this.selectedFile);
    this.upload(this.selectedFile).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.nuevaPeli = {};
          this.imagenPosterURL = event.data.media;
          this.nuevaPeli.id = this.id;
          this.nuevaPeli.nombre = this.nombre;
          this.nuevaPeli.tipo = this.tipo;
          this.nuevaPeli.estreno = this.estreno;
          this.nuevaPeli.cantPublico = this.publico;
          this.nuevaPeli.foto = event.data.media;
          this.nuevaPeli.actor = this.actorNombre;
          this.claseBoton = "";
          this.loading = false; // Flag variable 
          this.servPelis.guardarActorEnListado(this.nuevaPeli);
          this.Toast.fire({
            icon: 'success',
            title: 'Pelicula guardada'
          });
          console.info("La película nueva es: ", this.nuevaPeli);
        }
      }
    );
  }

  traerActores() {
    return this.servicioActores.ListadoDeActores;
  }

  seleccionarActor($event: any) {
    this.actor = $event;
    this.actorNombre = $event.nombre + " " + $event.apellido;
  }

  onFileSelected($event: any) {
    this.selectedFile = $event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      this.nombreDeArchivo = this.selectedFile.name;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  //////////////////////////////////////////// pasar a servicio

  upload(file: any): Observable<any> {
    let baseApiUrl = "https://thumbsnap.com/api/upload"
    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    //formData.append("Access-Control-Allow-Origin","*");
    formData.append('key', '000022251c7a412bc9ee3a2308329060');
    formData.append("media", file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(baseApiUrl, formData)
  }

}

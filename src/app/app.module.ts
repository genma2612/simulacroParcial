import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { TablaPeliculaComponent } from './peliculas/tabla-pelicula/tabla-pelicula.component';
import { PeliculaListadoComponent } from './peliculas/pelicula-listado/pelicula-listado.component';
import { PeliculaAltaComponent } from './peliculas/alta/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './actor/alta/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor/listado/actor-listado/actor-listado.component';
import { DetallePeliculaComponent } from './peliculas/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { ActorComponent } from './clases/actor/actor.component';
import { PeliculaComponent } from './clases/pelicula/pelicula.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    PeliculaListadoComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    ActorComponent,
    PeliculaComponent,
    NavbarComponent,
    ActorPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

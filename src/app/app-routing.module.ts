import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './actor/alta/actor-alta/actor-alta.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PeliculaAltaComponent } from './peliculas/alta/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './peliculas/pelicula-listado/pelicula-listado.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';

const routes: Routes = [
  { path:"bienvenido", component:BienvenidoComponent },
  { path: '', redirectTo: '/busqueda', pathMatch: 'full' },
  { path: "busqueda", component: BusquedaComponent },
  { path: "peliculas/alta", component: PeliculaAltaComponent },
  { path: "actor/alta", component: ActorAltaComponent },
  { path: "peliculas/listado", component: PeliculaListadoComponent },
  { path: "actor/pelicula", component: ActorPeliculaComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

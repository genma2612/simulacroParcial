import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';
import { Pelicula } from '../clases/pelicula';
import { Injectable } from '@angular/core';
import { doc, collection, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PelisFireService {

  private pelisCollection?: AngularFirestoreCollection<Pelicula>;
  pelis: Observable<Pelicula[]>;
  private itemDoc?: AngularFirestoreDocument<Pelicula>;
  peliSeleccionada?: Observable<Pelicula>;

  constructor(private firestore: AngularFirestore) { 
    this.pelis = this.getAll();
  }

  getAll() {
    this.pelisCollection = this.firestore.collection<Pelicula>('peliculas');
    return this.pelisCollection.valueChanges({idField: 'uid'}) as Observable<Pelicula[]>;
    //return this.pelisCollection.valueChanges({ idField: 'uid' });
  }

  getPelicula(id: string){
    return this.firestore.doc<Pelicula>(`items/${id}`);
    //this.peliSeleccionada = this.itemDoc.valueChanges();
  }

  agregarPelicula(peli: Pelicula) {
    return this.pelisCollection?.add(peli);
  }

  updatePelicula(peli: Pelicula) {
    const peliculaDocumentReference = this.firestore.doc(`peliculas/${peli.id}`);
    return peliculaDocumentReference.update(peli);
  }

  borrarPeli(id: any) {
    const peliculaDocumentReference = this.firestore.doc(`peliculas/${id}`);
    return peliculaDocumentReference.delete();
  }

}

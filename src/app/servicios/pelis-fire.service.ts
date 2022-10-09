import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';
import { Pelicula } from '../clases/pelicula';
import { Injectable } from '@angular/core';
import { doc, collection, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Firestore } from 'firebase/firestore';


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
    return this.pelisCollection.valueChanges();
  }

  getPelicula(id: string){
    return this.firestore.doc<Pelicula>('items/9swL8n9pZBxh9RIQDrYt');
    //this.peliSeleccionada = this.itemDoc.valueChanges();
  }

  agregarPelicula(peli: Pelicula) {
    return this.pelisCollection?.add(peli);
  }

  updatePelicula(peli: Pelicula) {
    const peliculaDocumentReference = this.firestore.doc(`peliculas/${peli.id}`);
    return peliculaDocumentReference.update(peli);
  }

  borrarPeli(id: string) {
    const peliculaDocumentReference = this.firestore.doc(`peliculas/${id}`);
    return peliculaDocumentReference.delete();
  }

}

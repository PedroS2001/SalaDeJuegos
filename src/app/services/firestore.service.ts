import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore, private router: Router) { }

  agregarLog(correo:string){
    let fecha = new Date();
    console.log(fecha);
    let user = {"correo":correo, "fecha":fecha};

    this.firestore.collection('logs').add(user)
    .then(() => this.router.navigateByUrl('home'));

  }
}

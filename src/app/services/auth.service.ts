import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean = false;
  userData: any;
  userLogueado:any = '';
  
  constructor(private auth: AngularFireAuth) {

  this.userData = auth.authState;

  console.log(auth.user.subscribe());
  auth.onAuthStateChanged((user) => {
    if (user) {
      this.userLogueado = user.toJSON();
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
    } else {
      this.userLogueado = '';
      // User is signed out
      // ...
    }
  });

  }


  // Sign up with email/password. DAR DE ALTA UN USUARIO
  SignUp(email:string, password:string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // Sign in with email/password. VERIFICAR QUE EL USUARIO EXISTA Y SUS DATOS
  SignIn(email:string, password:string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Sign Out. DESLOGUEAR AL USUARIO
  SignOut() {
    this.auth.signOut();
    this.loggedIn = false;
    }
}


  

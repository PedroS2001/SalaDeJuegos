import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, private fireService : FirestoreService) { }

  ngOnInit(): void {
  }

  error:string = '';
  correo:string = '';
  clave:string = '';

  signUp() {
    this.authService.SignUp(this.correo, this.clave)
    .then((result) => {
      console.log('Se registro correctamente');
      this.fireService.agregarLog(this.correo);
      this.authService.loggedIn = true;
      this.router.navigateByUrl('home');

    }).catch((error) => {
      if(error.message == 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).')
      {
        this.error = "El correo electronico ya se encuentra registrado";
      }
      else if(error.message == 'Firebase: The password must be 6 characters long or more. (auth/weak-password).')
      {
        this.error = "La contraseña debe tener 6 o mas caracteres";
      }
      else if(error.message == 'Firebase: The email address is badly formatted. (auth/invalid-email).')
      {
        this.error = "El Correo electronico tiene un formato no valido";
      }
      else
      {
        console.log(error);
        this.error = "Ha ocurrido un error. Intente de nuevo mas tarde";
      }
    })

  }

  goToLogin()
  {
    this.router.navigateByUrl('login');
  }


}

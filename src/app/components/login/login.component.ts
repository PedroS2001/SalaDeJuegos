import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo:string = "";
  clave:string = "";
  error:string = "";

  constructor(public authService: AuthService,  private router : Router, private fireService : FirestoreService) { }

  ngOnInit(): void {
  }

  
  
  funcion1()
  {
    console.log(this.authService.loggedIn);
  }
  funcion2()
  {
    console.log(this.authService.userData);
  } 
  funcion3()
  {
    console.log(this.authService.userLogueado);
  }




  goToRegistro()
  {
    this.router.navigateByUrl('registro');
  }
  
  AccesoRapido()
  {
    this.correo = "invitado@invitado.com";
    this.clave = "123456";
  }

  signIn() {
    this.authService.SignIn(this.correo, this.clave)
    .then((result) => {
      this.authService.loggedIn = true;
      this.authService.currentUser = {'correo': this.correo, 'clave':this.clave};
      // console.log(result.user?.email);
      // console.log(this.authService.userLogueado);
      this.fireService.agregarLog(this.correo);
      this.router.navigateByUrl('home');
      
      
    }).catch((error) => {
        console.log(error);
        if(error.code == 'auth/wrong-password')
        {
          this.error = "Contraseña incorrecta";
        }
        else
        {
          this.error = "Ha ocurrido un error. Intente de nuevo mas tarde";
        }
    })
  }
     

}

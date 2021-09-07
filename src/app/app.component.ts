import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Seneriz Sala de Juegos';

  constructor(public authService: AuthService, private router: Router) {
   }

  desloguear()
  {
    this.authService.SignOut();
    this.goToLogin();
  }

  goToHome()
  {
    this.router.navigateByUrl('home');
  }
  goToQuienSoy()
  {
    this.router.navigateByUrl('quien-soy');
  }
  goToLogin()
  {
    this.router.navigateByUrl('login');
  }
  goToRegistro()
  {
    this.router.navigateByUrl('registro');
  }
}

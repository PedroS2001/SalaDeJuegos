import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
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
  goToChat()
  {
    this.router.navigateByUrl('saladejuegos/chat');
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  MostrarData()
  {
    console.log(this.authService.userLogueado);
  }

  goToMayorMenor()
  {
    this.router.navigateByUrl('mayor-menor');
  }
}

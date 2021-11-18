import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  datosGithub:any;

  constructor(public gitService: GithubService, private router:Router) { }

  ngOnInit(): void {
    this.traerDatos();
    console.log(this.datosGithub);
  }

  traerDatos()
  {
    this.gitService.traerDatosGithub().subscribe( (datosRetornados:any) => {
      console.info('Datos de Github', datosRetornados)
      this.datosGithub = datosRetornados;
    });
  }

  goToBuscaminas()
  {
    this.router.navigateByUrl('saladejuegos/buscaminas');
  }

}

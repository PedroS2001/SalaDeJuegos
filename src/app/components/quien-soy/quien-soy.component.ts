import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  datosGithub:any;

  constructor(public gitService:GithubService) { }

  ngOnInit(): void {
    this.traerDatos();
    console.log(this.datosGithub);
  }

  traerDatos()
  {
    this.gitService.traerDatosGithub().subscribe(datosRetornados => {
      console.info('Datos de Github', datosRetornados)
      this.datosGithub = datosRetornados;
    });
  }

}

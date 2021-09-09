import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  numeroAleatorio:number;
  segundoNumero:number;
  puntuacion:number;
  constructor() {
    this.numeroAleatorio = this.getRandom();
    this.segundoNumero = this.getRandom();
    this.puntuacion = 0;

   }

  ngOnInit(): void {
  }

  getRandom()
  {
    let numero = Math.floor(Math.random() * (13 - 1)) + 1; 
    console.log(numero);
    return Math.floor(numero);
  }

  esMenor()
  {
    if(this.segundoNumero <= this.numeroAleatorio)
    {
      this.puntuacion++;
      this.numeroAleatorio = this.segundoNumero;
      this.segundoNumero= this.getRandom();
      //puntuacion +1 y asigno dos numeros nuevos
    }
    else{
      alert("PERDISTE. Tu puntuacion: " + this.puntuacion);
      this.puntuacion = 0;
    }
  }

  esMayor()
  {
    if(this.segundoNumero >= this.numeroAleatorio)
    {
      this.puntuacion++;
      this.numeroAleatorio = this.segundoNumero;
      this.segundoNumero = this.getRandom();
      //puntuacion +1 y asigno dos numeros nuevos
    }
    else{
      alert("PERDISTE. Tu puntuacion: " + this.puntuacion);
      this.puntuacion = 0;
    }
  }





}

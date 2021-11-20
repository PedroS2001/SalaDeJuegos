import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  
  pregunta:any;
  pais:any;
  loading:boolean = true;
  arrayPaises:any = [];
  arrayPreguntas:any = [
    {
      //ARGENTINA
      pregunta:'¿En que año se produjo la independencia Argentina?',
      op1:'1810',
      op2:'1816',
      op3:'1910',
      op4:'1825',
      respuesta: 2,
    },
    {
      //COLOMBIA
      pregunta:'¿Cual es la capital de este pais?',
      op1:'Bogota',
      op2:'Cali',
      op3:'Medellin',
      op4:'Ninguna de las anteriores',
      respuesta: 1,
    },
    {
      //BRASIL
      pregunta:'¿Quien es el maximo goleador de la seleccion de futbol de Brasil?',
      op1:'Ronaldinho',
      op2:'Ronaldo',
      op3:'Neymar',
      op4:'Pele',
      respuesta: 4,
    },
    {
      //ESPAÑA
      pregunta:'¿Que estrecho separa a España de Africa?',
      op1:'Estrecho de Magallanes',
      op2:'Estrecho de Baltasar',
      op3:'Estrecho de Gibraltar',
      op4:'Estrecho de Cinturas',
      respuesta: 3,
    },
    {
      //CHILE
      pregunta:'¿Cual es la cumbre mas alta de Chile?',
      op1:'Nevado Tres Cruces',
      op2:'Ojos Del Salado',
      op3:'Volcan Llullaillaco',
      op4:'Aconcagua',
      respuesta: 2,
    }
  ];

  constructor(private apiService: GithubService, private toastr:ToastrService) {
   }

  ngOnInit(): void {
    this.apiService.traerPaises().subscribe(datosRetornados => {
      this.arrayPaises = datosRetornados;
      console.info('PREGUNTAS', this.arrayPreguntas);
      this.armarPregunta();
    });
  }


  armarPregunta()
  {
    let indexRandom = this.getRandomInt(0,5);
    this.pregunta = this.arrayPreguntas[indexRandom];
    this.pais = this.arrayPaises[indexRandom];

    console.info('pregunta', this.pregunta);
    console.info('pais', this.pais);
    this.loading = false;
  }


  getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  seleccionarRta(respuesta:any)
  {
    this.loading = true;
    if(respuesta == this.pregunta.respuesta)
    {
      console.info('ADIVINO');
      this.toastr.success('Resuesta correcta!', '' , {
        timeOut: 1500,
        closeButton: true,
        positionClass: 'toast-top-center'
      });
    }
    else
    {
      console.info('ERROR');
      this.toastr.error('Respuesta incorrecta :(', '' ,{
      timeOut: 1500,
        closeButton: true,
        positionClass: 'toast-top-center'
      });
    }
    setTimeout(() => {
      this.armarPregunta();
    }, 200);
  }


}

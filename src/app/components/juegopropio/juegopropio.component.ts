import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-juegopropio',
  templateUrl: './juegopropio.component.html',
  styleUrls: ['./juegopropio.component.css']
})
export class JuegopropioComponent implements OnInit {

  constructor(){}
  ngOnInit(){
    this.pintarTablero();
  }

  arrayColumnas:any = [];
  arrayFilas:any = [];

  buscaminas:any = {
    filas: 1,
    columnas: 1,
    minasTotales: 1,
    minasEncontradas:0,
    campoMinas: []
  };

  nivel!:number;
  
  seleccionaNivel(nivel:number)
  {
    this.nivel = nivel;
    if(nivel == 1)
    {
      this.buscaminas.filas = 8;
      this.buscaminas.columnas = 8;
      this.buscaminas.minasTotales = 10;

      this.pintarTablero();
      for(let i=0; i< this.buscaminas.filas; i++)
      {
        for(let j=0; j< this.buscaminas.columnas; j++)
        {
          let idCasilla = i+'_'+j;
          let casillaHTML = (<HTMLElement> document.getElementById(idCasilla));
          casillaHTML.innerHTML = '';
        }
      }
      this.pintarTablero();
    }
    else if(nivel == 2)
    {
      this.buscaminas.filas = 16;
      this.buscaminas.columnas = 16;
      this.buscaminas.minasTotales = 40;

      this.pintarTablero();
      for(let i=0; i< this.buscaminas.filas; i++)
      {
        for(let j=0; j< this.buscaminas.columnas; j++)
        {
          let idCasilla = i+'_'+j;
          let casillaHTML = (<HTMLElement> document.getElementById(idCasilla));
          casillaHTML.innerHTML = '';
        }
      }

      this.pintarTablero();
    }
    else{
      this.buscaminas.filas = 16;
      this.buscaminas.columnas = 25;
      this.buscaminas.minasTotales = 80;

      this.pintarTablero();
      for(let i=0; i< this.buscaminas.filas; i++)
      {
        for(let j=0; j< this.buscaminas.columnas; j++)
        {
          let idCasilla = i+'_'+j;
          let casillaHTML = (<HTMLElement> document.getElementById(idCasilla));
          casillaHTML.innerHTML = '';
        }
      }
      this.pintarTablero();

    }
    this.generarCampoMinasVacio();
  }

  /**Pinta el tablero con divs */
  pintarTablero(){
    this.arrayColumnas = [];
    this.arrayFilas = [];
    for(let i = 0; i< this.buscaminas.columnas; i++)
    {
      this.arrayColumnas.push(i);
    }
    for(let i = 0; i< this.buscaminas.filas; i++)
    {
      this.arrayFilas.push(i);
    }
  }

  destapar(fila:number,columna:number)
  {
    // console.info(this.buscaminas.campoMinas[fila][columna]);
    console.info('se destapo la fila '+fila+', columna '+columna);
    let casilla = this.buscaminas.campoMinas[fila][columna];
    if(casilla == 'B')
    {
      alert('PERDISTE');
    }
    else
    {
      let idCasilla = fila+'_'+columna;
      let casillaHTML = (<HTMLElement> document.getElementById(idCasilla));
      casillaHTML.innerHTML = this.calcularMinasCercanas(fila,columna).toString();
      console.info(casillaHTML);
    }
    
  }

  /**Genera el campo de minas vacio con una matriz de FILASxCOLUMNAS */
  generarCampoMinasVacio()
  {
    this.buscaminas.campoMinas = new Array(this.buscaminas.filas);
    for (let fila=0; fila<this.buscaminas.filas; fila++){
        this.buscaminas.campoMinas[fila] = new Array(this.buscaminas.columnas);
    }
    this.plantarMinas();
  }

  /** Planta las minas en lugares aleatorios de la matriz campo   */
  plantarMinas()
  {
    let minasPlantadas = 0;
    while(minasPlantadas < this.buscaminas.minasTotales)
    {
      let fila :number = Math.floor(Math.random() * this.buscaminas.filas);
      let columna :number = Math.floor(Math.random() * this.buscaminas.columnas);
      
      if(this.buscaminas.campoMinas[fila][columna] != 'B')
      {
        this.buscaminas.campoMinas[fila][columna] = 'B';
        minasPlantadas++;
      }
    }
  }


  /**Calcula las minas que tiene en los casilleros aledaños. retorna esa cantidad */
  calcularMinasCercanas(fila:number, columna:number)
  {
    let minasAlrededor = 0;

    if(fila == 0)
    {
      this.buscaminas.campoMinas[fila][columna-1] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila][columna+1] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila+1][columna-1] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila+1][columna] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila+1][columna+1] == 'B' ? minasAlrededor++ : 0 ;
    }
    else if(fila == this.buscaminas.filas)
    {
      this.buscaminas.campoMinas[fila][columna-1] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila][columna+1] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila-1][columna-1] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila-1][columna] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila-1][columna+1] == 'B' ? minasAlrededor++ : 0 ;
    }
    else
    {
      this.buscaminas.campoMinas[fila-1][columna-1] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila-1][columna] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila-1][columna+1] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila][columna-1] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila][columna+1] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila+1][columna-1] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila+1][columna] == 'B' ? minasAlrededor++ : 0 ;
      this.buscaminas.campoMinas[fila+1][columna+1] == 'B' ? minasAlrededor++ : 0 ;
    }

    return minasAlrededor;

  }


  clickDerecho(event:Event, fila:any,columna:any)
  {
    event.preventDefault();
    let idCasilla = fila+'_'+columna;
    if(this.buscaminas.campoMinas[fila][columna] == 'B')
    {
      this.buscaminas.minasEncontradas++;
      if(this.buscaminas.minasEncontradas == this.buscaminas.minasTotales)
      {
        alert('Gano el juego!');
      }
    }
    let casillaHTML = (<HTMLElement> document.getElementById(idCasilla));
    casillaHTML.innerHTML = '<img src="assets/red-flag.png" width="90%" alt="">'
  }



  mostrar()
  {
    console.info('Buscaminas', this.buscaminas);
  }

  nuevoJuego()
  {
    this.seleccionaNivel(this.nivel);
  }

}


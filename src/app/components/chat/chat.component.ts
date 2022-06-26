import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  mensaje:string = '';
  correo:string = '';
  public mensajes:any = [];


  constructor(private chatService:ChatService, private authService:AuthService, firestore :FirestoreService, private toastr:ToastrService) {
    this.correo = authService.userLogueado.email;
    console.log(this.correo);

    this.LeerMensajes();
  }

  ngOnInit(): void {
    (<HTMLInputElement> document.getElementById('txtMsj')).focus();
    this.scrollToBottom();
  }


  /** Controla que ninguna palabra del mensaje tenga mas de 20 caracteres
   * 
   * @param mensaje 
   * @returns true si se puede enviar el mensaje, false si no
   */
  palabrasPermitidas(mensaje:string)
  {
    let retorno = true;
    let arrayPalabras = mensaje.split(" ");

    arrayPalabras.forEach( (palabra:string) => {
      if(palabra.length > 20)
      {
        retorno = false;
      }
    });
    return retorno;
  }


  EnviarMensaje()
  {
    this.mensaje = this.mensaje.trim();

    if(this.mensaje != '')
    {
      if(this.palabrasPermitidas(this.mensaje))
      {
        let cantidad:number = 1111;
        for(let item of this.mensajes)
        {
          cantidad++;
        }
        this.correo = this.authService.userLogueado.email;
        this.chatService.agregarMensaje(this.correo, this.mensaje, cantidad);

        this.mensaje = '';
        (<HTMLInputElement> document.getElementById('txtMsj')).focus();
        
        this.scrollToBottom();
      }
      else
      {
        this.toastr.error('No se pueden enviar palabras con mas de 20 letras en el mensaje ', '' ,{
          timeOut: 1500,
            closeButton: true,
            positionClass: 'toast-top-center'
          });
      }
      
    }
    
  }
  
  
  @ViewChild('content') content!: ElementRef;

  scrollToBottom = () => {
    try {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    } catch (err) {}
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 
  
  LeerMensajes()
  {
    this.chatService.leerMensajes().subscribe((msgsSnapshot) => {
      this.mensajes = [];
      msgsSnapshot.forEach((registro: any) => {
        this.mensajes.push(
          registro.payload.doc.data()
        );
      })
    });
  }

  handleKeyDown($event:any)
  {
    if ($event.keyCode === 13 ) {
      $event.preventDefault();
      this.EnviarMensaje();
    }
  }


}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  constructor(private chatService:ChatService, private authService:AuthService, firestore :FirestoreService) {
    this.correo = authService.userLogueado.email;
    console.log(this.correo);

    this.LeerMensajes();
  }

  ngOnInit(): void {
    (<HTMLInputElement> document.getElementById('txtMsj')).focus();
    this.scrollToBottom();
  }

  mensaje:string = '';
  correo:string = '';
  public mensajes:any = [];


  EnviarMensaje()
  {
    this.mensaje = this.mensaje.trim();
    if(this.mensaje != '')
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
    
  }
  
  @ViewChild('content')
  content!: ElementRef;

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
          // id: registro.payload.doc.id,
          registro.payload.doc.data()
        );
      })
    });

  }

  pulsar(e:any) {
    if (e.keyCode === 13 ) {
      this.EnviarMensaje();
        e.preventDefault();
    }
  }

  handleKeyDown($event:any)
  {
    if ($event.keyCode === 13 ) {
      $event.preventDefault();
      this.EnviarMensaje();
    }
  }


}

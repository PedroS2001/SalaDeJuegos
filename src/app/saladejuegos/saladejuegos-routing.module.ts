import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from '../components/ahorcado/ahorcado.component';
import { ChatComponent } from '../components/chat/chat.component';
import { MayorMenorComponent } from '../components/mayor-menor/mayor-menor.component';
import { SaladejuegosComponent } from './saladejuegos.component';

const routes: Routes = 
[
  { path: '', component: SaladejuegosComponent },
  { path: 'mayor-menor', component: MayorMenorComponent},
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaladejuegosRoutingModule { }

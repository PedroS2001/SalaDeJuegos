import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { JuegopropioComponent } from './components/juegopropio/juegopropio.component';
import { LoginComponent } from './components/login/login.component';
import { MayorMenorComponent } from './components/mayor-menor/mayor-menor.component';
import { PagErrorComponent } from './components/pag-error/pag-error.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GuardianService } from './services/guardian.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent , canActivate: [GuardianService],  children: [] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'juegopropio', component: JuegopropioComponent },

  // { path: 'mayor-menor', loadChildren: () => import('./saladejuegos/saladejuegos.module').then(m => m.SaladejuegosModule)},
  { path: 'mayor-menor', component: MayorMenorComponent},
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'chat', component: ChatComponent },
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'saladejuegos', loadChildren: () => import('./saladejuegos/saladejuegos.module').then(m => m.SaladejuegosModule), canActivate: [GuardianService] },
  { path:'**', component: PagErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
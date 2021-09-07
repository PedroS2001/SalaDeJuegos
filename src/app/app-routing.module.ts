import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagErrorComponent } from './components/pag-error/pag-error.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GuardianService } from './services/guardian.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent , canActivate: [GuardianService],  children: [] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path:'**', component: PagErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
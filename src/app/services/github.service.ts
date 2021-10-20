import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  traerDatosGithub()
  {
    return this.http.get('https://api.github.com/users/PedroS2001');
  }

  traerUnPais(nombre:string)
  {
    return this.http.get('https://restcountries.com/v2/name/'+nombre);
  }

  traerPaises()
  {
    return this.http.get('https://restcountries.com/v2/alpha?codes=AR,CO,BR,ES,CL');
  }

}

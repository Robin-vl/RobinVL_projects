import { SpelerGeg } from './speler-geg';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernaamService {

  constructor(private http:HttpClient, private loginServ:LoginService) { }
  getData():Observable<SpelerGeg>{
    let gegevens = JSON.parse(localStorage.getItem('login'));
    const speler = gegevens['userid'];
    const spelerToken  =gegevens['token']
    return this.http.get(`https://lzv-nu.firebaseio.com/spelers/${speler}.json?auth=${spelerToken}`).pipe(map(data=>{
        let spelerNaam: SpelerGeg = new SpelerGeg();
        spelerNaam.naam = data['naam'];
        return spelerNaam;
    }));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Speellocaties } from './speellocaties';
import { Logingeg } from '../logingeg';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient, private loginServ: LoginService) { }
  getLocation(id:string):Observable<Speellocaties>{
    let user: Logingeg = this.loginServ.gegevensGeb;
    return this.http.get<Speellocaties>(`https://lzv-nu.firebaseio.com/locaties.json?auth=${user.tokenId}`).pipe(map(respons=>{
      let gameLoc: Speellocaties = new Speellocaties(respons[id]['adres'],respons[id]['latitude'],respons[id]['longitude'],respons[id]['naam']);
      return gameLoc;
    }))
  }
}

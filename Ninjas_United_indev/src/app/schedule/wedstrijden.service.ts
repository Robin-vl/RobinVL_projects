import { Observable } from 'rxjs';
import { Logingeg } from 'src/app/logingeg';
import { LoginService } from 'src/app/login.service';
import { Wedstrijd } from './wedstrijd';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WedstrijdenService {

  constructor(private http:HttpClient, private loginServ:LoginService) { }
  getWed():Observable<Wedstrijd[]>{
    let user: Logingeg = this.loginServ.gegevensGeb;
    return this.http.get<Wedstrijd>('https://lzv-nu.firebaseio.com/wedstrijden.json?auth='+user.tokenId).pipe(map(data=>{
      let games: Wedstrijd[] = [];
      for(let w in data){
        let game: Wedstrijd = new Wedstrijd(data[w]['title'],data[w]['startDate'],data[w]['endDate'],w);
        games.push(game);
      }return games;
    }))
  }
  saveWed(wed:Wedstrijd):Observable<void>{
    return this.http.post<void>('https://lzv-nu.firebaseio.com/wedstrijden.json',wed);
  }
}

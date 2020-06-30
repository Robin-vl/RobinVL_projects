import { Logingeg } from 'src/app/logingeg';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SpelerGeg } from "./speler-geg";
import { map } from "rxjs/operators";
import { LoginService } from './login.service';

@Injectable({
  providedIn: "root",
})
export class SpelersgegevensService {
  constructor(private http: HttpClient, private loginServ:LoginService) {}
  
  getSpelers(): Observable<SpelerGeg[]> {
    let userGeg: Logingeg = this.loginServ.gegevensGeb;
    return this.http
      .get<SpelerGeg>("https://lzv-nu.firebaseio.com/spelers/.json?auth="+userGeg.tokenId)
      .pipe(
        map((data) => {
          let spelers: SpelerGeg[] = [];
          for (let s in data) {
            let speler: SpelerGeg = new SpelerGeg(
              data[s]["naam"],
              data[s]["bijnaam"],
              data[s]["wedstrijden"],
              data[s]["assists"],
              data[s]["goals"],
              s
            );
            spelers.push(speler);
          }
          return spelers;
        })
      );
  }
}

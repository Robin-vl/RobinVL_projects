import { Injectable } from '@angular/core';
import { Medewerker } from './medewerker';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Klanten } from './klanten';

@Injectable({
  providedIn: 'root'
})
export class MedewerkerService {
  constructor(private http: HttpClient) { };
  getMed(): Observable<Medewerker[]> {
    return this.http.get<Medewerker[]>("https://angular-demo-6bde3.firebaseio.com/medewerkers.json").pipe(map(
      gegevens => {
        let verzameling: Medewerker[] = [];
        for (let i in gegevens) {
          var med: Medewerker = new Medewerker(i, gegevens[i]['naam'], gegevens[i]['email'], gegevens[i]['afbeelding'])
          verzameling.push(med);
        } return verzameling;
      }
    ))
  }
  addMed(id: string, naam: string, mail: string, afb: string): Observable<Medewerker[]> {
    let medew: Medewerker = new Medewerker(id, naam, mail, afb);
    console.log(medew);
    return this.http.post<Medewerker[]>("https://angular-demo-6bde3.firebaseio.com/medewerkers.json", medew);
  }
  removeDb(id): Observable<Medewerker[]> {
    return this.http.delete<Medewerker[]>(`https://angular-demo-6bde3.firebaseio.com/medewerkers/${id}.json`);
  }
  getKlanten(): Observable<Klanten[]> {
    return this.http.get<Klanten[]>("https://angular-demo-6bde3.firebaseio.com/klanten.json").pipe(map(data => {
      var verzKlant: Klanten[] = [];
      for (let klant in data) {
        let kl: Klanten = new Klanten(data[klant]['voornaam'], data[klant]['naam'], data[klant]['plaats'], data[klant]['postcode'], data[klant]['straat'], klant);
        verzKlant.push(kl);
      } console.log(verzKlant); return verzKlant;
    }))
  }
  getDetail(nummer: string): Observable<Klanten> {
    return this.http.get<Klanten>(`https://angular-demo-6bde3.firebaseio.com/klanten/${nummer}.json`).pipe(map(
      data => {
      data.id = nummer;
        return data
      }
    ));
  }
  addKlanten(naam: string, voornaam: string, plaats: string, straat: string, postcode: string): Observable<Klanten> {
    let klant: Klanten = new Klanten(voornaam, naam, plaats, postcode, straat)
    return this.http.post<Klanten>("https://angular-demo-6bde3.firebaseio.com/klanten.json", klant);
  }
  verwijderKlant(id: string): Observable<void> {
    return this.http.delete<void>(`https://angular-demo-6bde3.firebaseio.com/klanten/${id}.json`);
  }
  aanpassingKlant(klant: Klanten): Observable<void> {
    return this.http.put<void>(`https://angular-demo-6bde3.firebaseio.com/klanten/${klant.id}.json`, klant);
  }
}

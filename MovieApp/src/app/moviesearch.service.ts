import { Injectable, Input, ɵAPP_ID_RANDOM_PROVIDER } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Films } from "./films";

@Injectable({
  providedIn: "root",
})
export class FilmsService {
  constructor(private http: HttpClient) {}
  getMovies(titel): Observable<Films[]> {
    return this.http
      .get<Films[]>(`https://www.omdbapi.com/?s=${titel}&apikey=2cdc466c`)
      .pipe(
        map((gegevens) => {
          let verzameling: Films[] = [];
          for (let x in gegevens["Search"]) {
            var mov: Films = new Films(
              x,
              gegevens["Search"][x]["Title"],
              gegevens["Search"][x]["Year"],
              gegevens["Search"][x]["Poster"],
              gegevens["Search"][x]["imdbID"]
            );
            verzameling.push(mov);
          }
          console.log(verzameling);
          return verzameling;
        })
      );
  }

  getInfo(imdb: string): Observable<Films> {
    return this.http
      .get<Films>(`https://www.omdbapi.com/?i=${imdb}&apikey=2cdc466c`)
      .pipe(
        map((data) => {
          var movie: Films = new Films("", data['Title'],data['Year'], data["Poster"], "", data["Plot"], data['Genre'],data['Runtime'],data['Actors']);
          return movie;
        })
      );
  }
}

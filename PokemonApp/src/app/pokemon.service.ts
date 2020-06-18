import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokname(name:string): Observable<Pokemon>{
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(map(data =>{
      if(data['types']['1']==undefined){
        var pok: Pokemon = new Pokemon( data['name'], data['sprites']['front_default'],data['types']['0']['type']['name'],undefined,data['id']);
        return pok;
      }else{
        var pok: Pokemon = new Pokemon( data['name'], data['sprites']['front_default'],data['types']['0']['type']['name'],data['types']['1']['type']['name'],data['id']);
        return pok;
      }
    }));
  }
  getPoknum(id:string): Observable<Pokemon>{
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(map(data =>{
      if(data['types']['1']==undefined){
        var pok: Pokemon = new Pokemon( data['name'], data['sprites']['front_default'],data['types']['0']['type']['name'],undefined,data['id']);
        return pok;
      }else{
        var pok: Pokemon = new Pokemon( data['name'], data['sprites']['front_default'],data['types']['0']['type']['name'],data['types']['1']['type']['name'],data['id']);
        return pok;
      }
    }));
  }
  getPoktype(type:string): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`https://pokeapi.co/api/v2/type/${type}`).pipe(map(data =>{
      var verzamelingPok: Pokemon[] =[];
      for(let x in data['pokemon']){
        this.getPokname(data['pokemon'][x]['pokemon']['name']).subscribe(data =>{
          var pok: Pokemon =  data;
          verzamelingPok.push(pok);
        })
      }
      return verzamelingPok;
    }));
  }
}

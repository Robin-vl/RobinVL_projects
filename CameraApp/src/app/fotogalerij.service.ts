import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foto } from './foto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FotogalerijService {

  constructor(public http: HttpClient) { }

  savePhoto(fot:Foto):Observable<Foto>{
    return this.http.post<Foto>("https://angular-demo-6bde3.firebaseio.com/fotos.json", fot);
  }

  getPhotos():Observable<Foto[]>{
    return this.http.get<Foto[]>("https://angular-demo-6bde3.firebaseio.com/fotos.json").pipe(map(data=>{
      let verzFoto: Foto[] = [];
      for(let f in data){
        let newFoto: Foto = new Foto(data[f]['data'],f);
        verzFoto.push(newFoto);
      }return verzFoto;
    }))
  };
  
  verwijderFoto(id:string):Observable<Foto>{
    return this.http.delete<Foto>(`https://angular-demo-6bde3.firebaseio.com/fotos/${id}.json`);
  }

}

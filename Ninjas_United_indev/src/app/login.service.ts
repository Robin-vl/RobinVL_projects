import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logingeg } from './logingeg';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  gegevensGeb: Logingeg = new Logingeg();
  public loginFireb(email:string,ww:string){
    const apiKey = 'AIzaSyApW3q9VBc5oTf2GPqbKnyAuty9dYwmOhs'
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+apiKey,
    {email: email,password:ww,returnSecureToken:true})
  }
}

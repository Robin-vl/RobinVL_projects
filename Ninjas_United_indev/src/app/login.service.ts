import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Logingeg } from "./logingeg";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}
  public isLoggedIn: boolean = false;
  gegevensGeb: Logingeg = new Logingeg();
  private apiKey: string = "AIzaSyApW3q9VBc5oTf2GPqbKnyAuty9dYwmOhs";
  public loginFireb(email: string, ww: string) {
    return this.http.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        this.apiKey,
      { email: email, password: ww, returnSecureToken: true }
    );
  }
  public nieuweGeb(mail: string, ww: string) {
    return this.http.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        this.apiKey,
      { email: mail, password: ww, returnSecureToken: true }
    );
  }
  autoLogin() {
    if (localStorage.getItem("login") != null) {
      let log = JSON.parse(localStorage.getItem("login"));
      this.gegevensGeb.tokenId = log.token;
      this.gegevensGeb.userId = log.userId;
      this.isLoggedIn = true;
    }
  }
  uitloggen(){
    this.isLoggedIn = false;
    this.gegevensGeb.tokenId = null
    this.gegevensGeb.userId = null;
    localStorage.removeItem('login');
  }
}

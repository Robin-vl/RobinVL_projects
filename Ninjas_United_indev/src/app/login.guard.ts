import { Injectable } from "@angular/core";
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanLoad {
  constructor(private logServ: LoginService, private rout: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.logServ.isLoggedIn) {
      this.logServ.autoLogin();
      // autologin gaat isLoggedIn aanpassen, dan naar volgende stap (Beinvloed if hieronder!)
    }
    if (!this.logServ.isLoggedIn) {
      this.rout.navigateByUrl("home");
    }

    return this.logServ.isLoggedIn;
  }
}

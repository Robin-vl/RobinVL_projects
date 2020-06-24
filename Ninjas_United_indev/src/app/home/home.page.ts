import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loginserv: LoginService, private rout: Router) {}
  
  login(mail:string, ww:string){
    this.loginserv.loginFireb(mail,ww).subscribe(data=>{
      this.loginserv.gegevensGeb.tokenId = data['idToken'];
      this.loginserv.gegevensGeb.userId = data['localId'];
      this.rout.navigateByUrl('main');
    },
    error =>{console.log(error['error'])});
  }

}

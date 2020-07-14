import { Router } from '@angular/router';
import { SpelerGeg } from './../speler-geg';
import { UsernaamService } from './../usernaam.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private userName:UsernaamService, private loginServ: LoginService, private rout:Router) { }
  naamUser:SpelerGeg = new SpelerGeg();
  ngOnInit() {
    this.userName.getData().subscribe(data=>{
      this.naamUser = data;
    })
  }

  ionViewWillEnter(){
    this.userName.getData().subscribe(data=>{
      this.naamUser = data;
    })
  }
  logout(){
    this.loginServ.uitloggen();
    this.rout.navigateByUrl('home');
  }
}

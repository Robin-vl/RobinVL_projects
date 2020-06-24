import { SpelerGeg } from './../speler-geg';
import { UsernaamService } from './../usernaam.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private userName:UsernaamService) { }
  naamUser:SpelerGeg = new SpelerGeg();
  ngOnInit() {}

  ionViewWillEnter(){
    this.userName.getData().subscribe(data=>{
      this.naamUser = data;
    })
  }

}

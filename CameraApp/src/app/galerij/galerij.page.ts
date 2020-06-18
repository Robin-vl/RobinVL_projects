import { FotogalerijService } from './../fotogalerij.service';
import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto';

@Component({
  selector: 'app-galerij',
  templateUrl: './galerij.page.html',
  styleUrls: ['./galerij.page.scss'],
})
export class GalerijPage implements OnInit {

  constructor(private serv: FotogalerijService) { }
  public fotoGalerij: Foto[] =[];

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.serv.getPhotos().subscribe(data =>{
      this.fotoGalerij = data;
    });
  }
  verwFoto(id:string){
    this.serv.verwijderFoto(id).subscribe(data=>{
      this.serv.getPhotos().subscribe(data =>{
        this.fotoGalerij = data;
      });
    })
  }
}

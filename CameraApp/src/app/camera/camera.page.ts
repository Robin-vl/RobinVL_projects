import { Router } from '@angular/router';
import { FotogalerijService } from './../fotogalerij.service';
import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory,   CameraPhoto, CameraSource } from '@capacitor/core';
import { Foto } from '../foto';

const { Camera, Filesystem, Storage } = Plugins;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  public foto:Foto = new Foto('');
  async fotoNemen(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    this.foto = new Foto(capturedPhoto.base64String);
  }
  constructor(private serv: FotogalerijService, private rout:Router) { }

  ngOnInit() {
  }
  opslaan(){
    this.serv.savePhoto(this.foto).subscribe(data=>{
      this.rout.navigateByUrl('home');
      this.foto.data ="";
    });
  }
  delete(){
    this.foto.data ="";
  }

}

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-registratie',
  templateUrl: './registratie.page.html',
  styleUrls: ['./registratie.page.scss'],
})
export class RegistratiePage implements OnInit {

  constructor(private loginServ:LoginService, private rout:Router, private alrtcntrl: AlertController) { }

  ngOnInit() {
  }
  public regForm: NgForm;
  register(mail:string,ww:string, registForm:NgForm){
    this.regForm = registForm;
    this.loginServ.nieuweGeb(mail,ww).subscribe(respons=>{
      this.rout.navigateByUrl('/home');
    },
    async error=>{
      let message:string;
      if(error.error.error.message =="INVALID_EMAIL"){
        message= ('Foutief emailadres');
        this.regForm.controls['mail'].setErrors({'incorrect':true});
        this.regForm.resetForm();
      }else if(error.error.error.message =="EMAIL_EXISTS"){
        message=('Dit emailadres is reeds geregistreerd!');
        this.regForm.controls['pasw2'].setErrors({'incorrect':true});
        this.regForm.resetForm();
      }else if(error.error.error.message == "WEAK_PASSWORD : Password should be at least 6 characters"){
        message=('Het wachtwoord moet minstens 6 karakters bevatten');
        this.regForm.controls['mail'].setErrors({'incorrect':true});
        this.regForm.resetForm();
      }else{
        message = error.error.error.message;
        this.regForm.resetForm();
      }
      const alert = await this.alrtcntrl.create(
        {
          header:'Foutmelding',
          message:'Er is een fout opgetreden: '+ message,
          buttons:['Terug']
        }
      );
      await alert.present();
    })
    };
  }


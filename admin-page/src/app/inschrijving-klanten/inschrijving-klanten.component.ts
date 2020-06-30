import { Component, OnInit } from '@angular/core';
import { MedewerkerService } from '../medewerker.service';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { Klanten } from '../klanten';

@Component({
  selector: 'app-inschrijving-klanten',
  templateUrl: './inschrijving-klanten.component.html',
  styleUrls: ['./inschrijving-klanten.component.scss']
})
export class InschrijvingKlantenComponent implements OnInit {
  constructor(public service:MedewerkerService, public router:Router) { }

  ngOnInit(): void {
  }
  
  addKlant(voornaam:string, naam:string, plaats:string, postcode:string, straat:string){
    this.service.addKlanten(naam,voornaam,plaats,straat,postcode).subscribe(data =>{
      this.service.getKlanten().subscribe(data=>{
        this.router.navigateByUrl('klanten');
      });
    })
  } 

}

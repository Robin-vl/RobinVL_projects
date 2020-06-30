import { Component, OnInit } from '@angular/core';
import { MedewerkerService } from '../medewerker.service';
import { Medewerker } from '../medewerker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toevoegenmed',
  templateUrl: './toevoegenmed.component.html',
  styleUrls: ['./toevoegenmed.component.scss']
})
export class ToevoegenmedComponent implements OnInit {
  public naam: string = "";
  public mail: string = "";
  public picture: string = "";
  public med: Medewerker[] = [];
  public isWaar: boolean = true;
  constructor(private medewerkerService: MedewerkerService, private router: Router) {
  }
  toevoegenDb() {
    this.medewerkerService.getMed().subscribe(gegevens => {
      this.med = gegevens;
    })
  }
  public resetKnop(naam: HTMLInputElement, mail: HTMLInputElement, picture: HTMLInputElement) {
    if (naam.value != "" || mail.value != "" || picture.value != "") {
      this.isWaar = false;
    } else if (naam.value == "" && mail.value == "" && picture.value == "") {
      this.isWaar = true;
    }
  }
  public opslaanGeg(naam: HTMLInputElement, mail: HTMLInputElement, picture: HTMLInputElement) {
    this.medewerkerService.addMed("", naam.value, mail.value, picture.value).subscribe(data => {
      this.terugMed();
    });
  }
  public resetten(naam: HTMLInputElement, mail: HTMLInputElement, picture: HTMLInputElement): void {
    naam.value = '';
    mail.value = '';
    picture.value = '';
    this.isWaar = true;
  }
  ngOnInit(): void {
  }
  terugMed() {
    this.router.navigateByUrl('medewerkers');
  }

}

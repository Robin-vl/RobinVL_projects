import { Component, OnInit } from '@angular/core';
import { MedewerkerService } from '../medewerker.service';
import { Klanten } from '../klanten';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.scss']
})
export class KlantenComponent implements OnInit {
  public klantgeg: Klanten[] = [];
  constructor(private serviceKl: MedewerkerService) { }

  ngOnInit(): void {
    this.getKlanten()
  }
  getKlanten() {
    this.serviceKl.getKlanten().subscribe(data => {
      this.klantgeg = data;
    })
  }
  deleteKlant(id: string) {
    console.log(id);
    this.serviceKl.verwijderKlant(id).subscribe(data => {
      this.getKlanten();
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { MedewerkerService } from '../medewerker.service';
import { Medewerker } from '../medewerker';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public medewerkers: Medewerker[] = [];
  constructor(private medewerkerService: MedewerkerService) { }

  ngOnInit(): void {
    this.medewerkerService.getMed().subscribe(data =>{
      this.medewerkers = data
    })
  }

}

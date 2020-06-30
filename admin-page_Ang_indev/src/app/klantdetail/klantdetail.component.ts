import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';
import { MedewerkerService } from '../medewerker.service';
import { Klanten } from '../klanten';

@Component({
  selector: 'app-klantdetail',
  templateUrl: './klantdetail.component.html',
  styleUrls: ['./klantdetail.component.scss']
})
export class KlantdetailComponent implements OnInit {
  public klant: Klanten = new Klanten("", "", "", "", "");
  constructor(private actRoute: ActivatedRoute, private service: MedewerkerService, public rout:Router) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((data: ParamMap) => {
      this.service.getDetail(data.get('klantnum')).subscribe(geg => {
        this.klant = geg;
      })
    })
  }
  aanpassenKlant(klant:Klanten){
    this.service.aanpassingKlant(klant).subscribe(data=>{
      this.service.getKlanten().subscribe(data=>{
        this.rout.navigateByUrl('/klanten');
      })
    })
  }
}





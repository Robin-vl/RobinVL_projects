import { Component, OnInit } from '@angular/core';
import { SpelersgegevensService } from 'src/app/spelersgegevens.service';
import { SpelerGeg } from 'src/app/speler-geg';

@Component({
  selector: 'app-gemgoals',
  templateUrl: './gemgoals.page.html',
  styleUrls: ['./gemgoals.page.scss'],
})
export class GemgoalsPage implements OnInit {
  constructor(private spelersgeg:SpelersgegevensService) { }
  spelerGeg: SpelerGeg[] = [];
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.spelersgeg.getSpelers().subscribe(respons=>{
      this.spelerGeg = respons;
      this.spelerGeg.sort((a,b)=>{
        //Ranking nog eens checken => niet ok
        if((a.goals/a.wedstrijden)<(b.goals/b.wedstrijden)){
          return 1;
        }else{
          return -1;
        }
      })
    });
  }

}

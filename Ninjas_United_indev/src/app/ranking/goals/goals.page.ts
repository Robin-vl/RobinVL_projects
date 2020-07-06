import { SpelersgegevensService } from './../../spelersgegevens.service';
import { Component, OnInit } from '@angular/core';
import { SpelerGeg } from 'src/app/speler-geg';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {

  constructor(private spelersgeg:SpelersgegevensService) { }
  spelerGeg: SpelerGeg[] = [];
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.spelersgeg.getSpelers().subscribe(respons=>{
      this.spelerGeg = respons;
      this.spelerGeg.sort((a,b)=>{
        if(a.goals<b.goals){
          return 1;
        }else{
          return -1;
        }
      })
    });
  }

}

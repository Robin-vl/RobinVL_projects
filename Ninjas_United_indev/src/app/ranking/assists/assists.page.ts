import { Component, OnInit } from '@angular/core';
import { SpelersgegevensService } from 'src/app/spelersgegevens.service';
import { SpelerGeg } from 'src/app/speler-geg';

@Component({
  selector: 'app-assists',
  templateUrl: './assists.page.html',
  styleUrls: ['./assists.page.scss'],
})
export class AssistsPage implements OnInit {

  constructor(private spelersgeg:SpelersgegevensService) { }
  spelerGeg: SpelerGeg[] = [];
  ranking:number=0
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.spelersgeg.getSpelers().subscribe(respons=>{
      this.spelerGeg = respons;
      this.spelerGeg.sort((a,b)=>{
        if(a.assists<b.assists){
          this.ranking++
          return 1;
        }else{
          return -1;
        }
      });
    });
  }
}

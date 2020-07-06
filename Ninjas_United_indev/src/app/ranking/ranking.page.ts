import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.router.navigateByUrl('ranking/goals');
  }

}

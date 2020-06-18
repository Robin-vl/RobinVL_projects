import { ActivatedRoute, ParamMap } from '@angular/router';
import { Films } from './../films';
import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../moviesearch.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private actRoute:ActivatedRoute, private serv:FilmsService) { }
  public movie: Films = new Films("","","","");
  ngOnInit() {
    this.actRoute.paramMap.subscribe((rout:ParamMap)=>{
      this.serv.getInfo(rout.get('id')).subscribe(data =>{
        this.movie = data;
      })
    })
  }

}

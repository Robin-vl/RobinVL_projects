import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`#footer{
    padding:0;
    position: fixed;
    bottom:0;
    width:100%;
  }`]
})
export class FooterComponent implements OnInit {
  public getJaar():number{
    let year:Date = new Date();
    return year.getFullYear();
  }
  constructor() { }

  ngOnInit(): void {
  }
}

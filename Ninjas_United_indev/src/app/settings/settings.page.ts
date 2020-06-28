import { Component, OnInit, ɵɵresolveBody } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }
  ngOnInit() {
    
   //console.log(window.matchMedia('(prefers-color-scheme: dark)'))
  }

  kleurTest(initiatedDark){
    if (initiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }
  darken(event){
    let darkSystem = window.matchMedia('(prefers-color-scheme: dark)');
    darkSystem.addListener(this.kleurTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }
}

import { Component, OnInit, NgZone } from '@angular/core';
//import { setInterval } from 'timers';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  public minutes:number = 1;
  public seconds = 0;
  constructor(private ngz: NgZone) { }

  ngOnInit() {
  }
  startTimer(){
    this.ngz.run(()=>{setInterval(()=>{
      if(this.seconds ==0){
        this.minutes--;
        this.seconds = 60;
      }else if(this.seconds == 0 && this.minutes ==0){
        
      }
      this.seconds --;
    },1000)})

  }
}

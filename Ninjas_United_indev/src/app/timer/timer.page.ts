import { Component, OnInit, NgZone } from '@angular/core';
import {
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';

const { Haptics } = Plugins;
export class HapticsExample {
  hapticsImpact(style = HapticsImpactStyle.Heavy) {
    Haptics.impact({
      style: style
    });
  }

  hapticsImpactMedium(style) {
    this.hapticsImpact(HapticsImpactStyle.Medium);
  }

  hapticsImpactLight(style) {
    this.hapticsImpact(HapticsImpactStyle.Light);
  }

  hapticsVibrate() {
    Haptics.vibrate();
  }

  hapticsSelectionStart() {
    Haptics.selectionStart();
  }

  hapticsSelectionChanged() {
    Haptics.selectionChanged();
  }

  hapticsSelectionEnd() {
    Haptics.selectionEnd();
  }
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})

export class TimerPage implements OnInit {
  constructor(private ngz: NgZone){}
  public tijdFunc;
  public startKnop: boolean = false;
  ngOnInit(): void {}
  resetTimer(){
    this.startKnop = false;
    clearInterval(this.tijdFunc);
    document.getElementById('min').innerHTML = `25 : 00`;
  }
  pauseTimer(){
    let stopTijd = document.getElementById('min');
    console.log(stopTijd);
  }
  tim() {
    // trilfunctie
    this.startKnop = true;
    var countDown = new Date(Date.now()+(1*60*1000)).getTime();
    this.tijdFunc = this.ngz.run(()  =>setInterval(function() {
      let now = new Date().getTime();
      let timeLeft = countDown - now;
      let min = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      let sec = Math.floor((timeLeft % (1000 * 60)) / 1000);
      if( min <10 && sec <10 && min>=0){
        document.getElementById('min').innerHTML = `0${min} : 0${sec}`;
      }else if( min < 10 && sec >=10 && min>=0){
        document.getElementById('min').innerHTML = `0${min} : ${sec}`;
      }
      else if(min >=10 && sec <10 || sec ==0 ){
        document.getElementById('min').innerHTML = `${min} : 0${sec}`;
      }
      else if(min< 0){
        clearInterval(this.tijdFunc);
        document.getElementById('min').innerHTML = `Time's up!`;
        Haptics.vibrate();
      }
      else if(min >=10 && sec >=10){
        document.getElementById('min').innerHTML = ` ${min} : ${sec}`;
      }
    }, 1000));
  }
}


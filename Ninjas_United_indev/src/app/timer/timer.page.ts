import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Plugins, HapticsImpactStyle } from "@capacitor/core";

const { Haptics } = Plugins;

@Component({
  selector: "app-timer",
  templateUrl: "./timer.page.html",
  styleUrls: ["./timer.page.scss"],
})
export class TimerPage implements OnInit {
  constructor(private fb: FormBuilder) {}
  public tijdFunc;
  public startKnop: boolean = false;
  public pauze: boolean;
  public countD;
  public min: number = 25;
  public sec: number = 0;
  public timeLeft;
  ngOnInit(): void {}
  resetTimer() {
    this.pauze = false;
    this.min = 25;
    this.sec = 0;
    this.startKnop = false;
    clearInterval(this.tijdFunc);
  }
  pauseTimer() {
    clearInterval(this.tijdFunc);
    this.startKnop = false;
    this.pauze = true;
  }
  tim() {
    // trilfunctie
    this.startKnop = true;
    if (this.pauze) {
      this.countD = new Date(Date.now() + this.timeLeft).getTime();
      this.pauze = false;
    } else {
      this.countD = new Date(Date.now() + 25 * 60 * 1000).getTime();
    }
    this.tijdFunc = setInterval(() => {
      let now = new Date().getTime();
      this.timeLeft = this.countD - now;
      this.min = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      this.sec = Math.floor((this.timeLeft % (1000 * 60)) / 1000);
      if (this.min === 0 && this.sec === 0) {
        clearInterval(this.tijdFunc);
        Haptics.vibrate();
      }
    }, 1000);
  }
}

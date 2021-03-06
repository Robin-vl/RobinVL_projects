import { Match } from "./match";
import { WedstrijdenService } from "src/app/schedule/wedstrijden.service";
import { SpelersgegevensService } from "./../spelersgegevens.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Plugins, HapticsImpactStyle } from "@capacitor/core";
import { SpelerGeg } from "../speler-geg";
import { Wedstrijd } from "src/app/schedule/wedstrijd";

const { Haptics } = Plugins;

@Component({
  selector: "app-timer",
  templateUrl: "./timer.page.html",
  styleUrls: ["./timer.page.scss"],
})
export class TimerPage implements OnInit {
  constructor(
    private spelersServ: SpelersgegevensService,
    private wedstrijdSer: WedstrijdenService,
    private fb: FormBuilder
  ) {}
  public tijdFunc;
  public startKnop: boolean = false;
  public pauze: boolean;
  public countD;
  public min: any= 25;
  public sec: any = 0;
  public timeLeft;
  public dataSpelers: SpelerGeg[] = [];
  public wedstrijden: Wedstrijd[] = [];
  public matchStat: Match[] = [];
  public reedsAanw: boolean = false;
  public percentage: number = 0;
  public radius: number = 75;
  public progress: number = 0;
  ngOnInit(): void {}
  ionViewWillEnter() {
    this.getGegevens();
    this.getGames();
  }
  resetTimer() {
    this.pauze = false;
    this.min = 25;
    this.sec = 0;
    this.startKnop = false;
    this.percentage = 0;
    this.progress = 0;
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
      if(this.min <10){
        this.min = "0" + this.min;
      }
      if(this.sec <10){
        this.sec = "0" + this.sec;
      }
      this.percentage = Math.floor((this.progress/1500)*100);
      console.log(this.percentage, this.progress, this.min);
      this.progress++;
      if (this.min === 0 && this.sec === 0) {
        clearInterval(this.tijdFunc);
        Haptics.vibrate();
      }
    }, 1000);
  }
  public wedstrijdForm = this.fb.group({
    game: [""],
    player: [""],
    goalAss: [""],
  });

  getGegevens() {
    this.spelersServ.getSpelers().subscribe((data) => {
      this.dataSpelers = data;
      console.log(this.dataSpelers);
    });
  }
  getGames() {
    this.wedstrijdSer.getWed().subscribe((data) => {
      this.wedstrijden = data;
    });
  }
  liveMatch(naam: string) {
    //nog aan te maken voor doorsturen data
  }

  optellenGoals(i: number) {
    this.matchStat[i].goals++;
  }
  optellenAssists(i: number) {
    this.matchStat[i].assists++;
  }
}

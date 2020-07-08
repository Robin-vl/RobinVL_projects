import { Component, OnInit } from "@angular/core";
import { SpelersgegevensService } from "src/app/spelersgegevens.service";
import { SpelerGeg } from "src/app/speler-geg";

@Component({
  selector: "app-gemgoals",
  templateUrl: "./gemgoals.page.html",
  styleUrls: ["./gemgoals.page.scss"],
})
export class GemgoalsPage implements OnInit {
  constructor(private spelersgeg: SpelersgegevensService) {}
  spelerGeg: SpelerGeg[] = [];
  ngOnInit() {}
  ionViewWillEnter() {
    this.spelersgeg.getSpelers().subscribe((respons) => {
      this.spelerGeg = respons;
      for (let i in this.spelerGeg) {
        if (this.spelerGeg[i].wedstrijden === 0) {
          this.spelerGeg.splice(Number(i), 1);
        }
      }
      this.spelerGeg.sort((a, b) => {
        //Ranking nog eens checken => niet ok
        if (
          ((a.goals * 1.0) / a.wedstrijden) * 1.0 <
          ((b.goals * 1.0) / b.wedstrijden) * 1.0
        ) {
          return 1;
        } else if (
          ((a.goals * 1.0) / a.wedstrijden) * 1.0 >
          ((b.goals * 1.0) / b.wedstrijden) * 1.0
        ) {
          return -1;
        } else {
          return 0;
        }
      });
    });
  }
}

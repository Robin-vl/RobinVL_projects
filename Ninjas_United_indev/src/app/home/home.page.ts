import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { LoginService } from "../login.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(
    private loginserv: LoginService,
    private rout: Router,
    private alrtCntrl: AlertController
  ) {}
  ngOnInit() {
    this.loginserv.autoLogin();
    if (this.loginserv.isLoggedIn) {
      this.rout.navigateByUrl("./main");
    }
  }
  public inlForm: NgForm;
  login(mail: string, ww: string, form: NgForm) {
    this.loginserv.loginFireb(mail, ww).subscribe(
      (data) => {
        this.loginserv.isLoggedIn = true;
        this.loginserv.gegevensGeb.tokenId = data["idToken"];
        this.loginserv.gegevensGeb.userId = data["localId"];
        this.rout.navigateByUrl("main");
        localStorage.setItem(
          "login",
          JSON.stringify({
            token: this.loginserv.gegevensGeb.tokenId,
            userid: this.loginserv.gegevensGeb.userId,
          })
        );
      },
      async (error) => {
        this.inlForm = form;
        console.log(error.error.error.message);
        let message: string;
        if (error.error.error.message == "EMAIL_NOT_FOUND") {
          message = "Foutief emailadres";
          this.inlForm.controls["mail"].setErrors({ incorrect: true });
          this.inlForm.resetForm();
        } else if (error.error.error.message == "INVALID_PASSWORD") {
          message = "Incorrect wachtwoord!";
          this.inlForm.controls["wachtwoord"].setErrors({ incorrect: true });
          this.inlForm.resetForm();
        } else if (
          error.error.error.message ==
          "TOO_MANY_ATTEMPTS_TRY_LATER : Too many unsuccessful login attempts. Please try again later."
        ) {
          message =
            "U heeft te vaak proberen in te loggen, probeer later opnieuw";
          this.inlForm.controls["mail"].setErrors({ incorrect: true });
          this.inlForm.resetForm();
        } else {
          message = error.error.error.message;
          this.inlForm.resetForm();
        }
        const alert = await this.alrtCntrl.create({
          header: "Foutmelding",
          message: "Er is een fout opgetreden: " + message,
          buttons: ["Terug"],
        });
        await alert.present();
      }
    );
  }
}

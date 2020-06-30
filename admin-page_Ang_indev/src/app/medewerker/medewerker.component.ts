import { Component} from '@angular/core';
import { Medewerker } from '../medewerker';
import { MedewerkerService } from '../medewerker.service';

@Component({
    selector: 'app-medewerker',
    templateUrl: './medewerker.component.html',
    styleUrls: ['./medewerker.component.scss']
})
export class MedewerkerComponent {
    public naam: string = "";
    public mail: string = "";
    public med: Medewerker[] = [];
    constructor(private medewerkerService: MedewerkerService) {
    }
    ngOnInit(): void {
        this.medewerkerService.getMed().subscribe(data => {
            this.med = data;
        })
    }
    public removeDb(id): void {
        this.medewerkerService.removeDb(id).subscribe(geg => {
            this.medewerkerService.getMed().subscribe(data => {
                this.med = data;
            })
        });
    }
    public popup(naam: HTMLInputElement, mail: HTMLInputElement): void {
        alert(naam + " " + mail);
    }
}
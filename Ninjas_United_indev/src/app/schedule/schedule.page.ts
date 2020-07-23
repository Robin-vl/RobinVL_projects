import { WedstrijdenService } from './wedstrijden.service';
import { Component, OnInit, ViewChild, LOCALE_ID, Inject } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Plugins } from "@capacitor/core";


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  //Firebase nog koppelen
  eventSource:any []= [];
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  selectedDate = new Date();
  onViewTitleChanged(title) {
    console.log(title);
  }
  event = {
    title:'',
    location:'',
    startTime:'',
    endTime: '',
  }
  minDate = new Date().toISOString()
  maanden:string[]=['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];
  
  @ViewChild(CalendarComponent) myCalend: CalendarComponent;
  collapseC: boolean = false;
  ngOnInit() {
    this.resetEvent();
  }
  constructor(private servWed: WedstrijdenService, private alertcntrl: AlertController, @Inject(LOCALE_ID) private loc:string) { }
  
  resetEvent(){
    this.event = {
      title:'',
      location:'',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
    }
  }
  addGame(){
    let newEvent = {
      title: this.event.title,
      location: this.event.location,
      startTime: new Date(this.event.startTime),
      endTime:  new Date(this.event.endTime)
    }
    this.eventSource.push(newEvent);
    this.myCalend.loadEvents();
    this.resetEvent();
  }
  onTimeSelected(event) {
    let select = new Date(event.selectedTime);
    this.selectedDate = select;
    this.event.startTime = select.toISOString();
    select.setHours(select.getHours()+1);
    this.event.endTime = select.toISOString();
  }
  //Enkel voor volledige dagen te gebruiken
    async onEventSelected(event) {
    let start = formatDate(event.startTime,'medium',this.loc);
    let einde = formatDate(event.endTime,'medium',this.loc);
    const alert = await this.alertcntrl.create({
      header: event.title,
      subHeader: event.location,
      message: `Startuur: ${start} - Einduur: ${einde}`,
      buttons: ['Sluiten']
    });
    alert.present();
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }


}

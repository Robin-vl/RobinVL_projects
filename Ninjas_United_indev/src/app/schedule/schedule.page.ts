import { WedstrijdenService } from './../wedstrijden.service';
import { Component, OnInit } from '@angular/core';
import { Wedstrijd } from '../wedstrijd';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  eventSource:Wedstrijd []= [];
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  selectedDate = new Date();
  onViewTitleChanged(title) {
    console.log(title);
  }
  maanden:string[]=['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];
  addEvent(){
    let start = this.selectedDate;
    let end = this.selectedDate;
    end.setMinutes(end.getMinutes()+ 60);
    let event:Wedstrijd ={
      title: 'Event#: ' + start.getMinutes(),
      startTime: start.toISOString(),
      endTime: end.toISOString()
    }
    this.servWed.saveWed(event).subscribe(respons=>{
    })
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedDate = ev.selectedTime;
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  reloadSource(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  constructor(private servWed: WedstrijdenService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.servWed.getWed().subscribe(respons=>{
      this.eventSource = respons;
    })
  }
}

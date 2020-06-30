import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InschrijvingKlantenComponent } from './inschrijving-klanten.component';

describe('InschrijvingKlantenComponent', () => {
  let component: InschrijvingKlantenComponent;
  let fixture: ComponentFixture<InschrijvingKlantenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InschrijvingKlantenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InschrijvingKlantenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

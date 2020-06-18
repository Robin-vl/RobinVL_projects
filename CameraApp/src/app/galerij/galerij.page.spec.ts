import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalerijPage } from './galerij.page';

describe('GalerijPage', () => {
  let component: GalerijPage;
  let fixture: ComponentFixture<GalerijPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerijPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalerijPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistratiePage } from './registratie.page';

describe('RegistratiePage', () => {
  let component: RegistratiePage;
  let fixture: ComponentFixture<RegistratiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistratiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

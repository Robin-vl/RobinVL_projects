import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GemgoalsPage } from './gemgoals.page';

describe('GemgoalsPage', () => {
  let component: GemgoalsPage;
  let fixture: ComponentFixture<GemgoalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemgoalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GemgoalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssistsPage } from './assists.page';

describe('AssistsPage', () => {
  let component: AssistsPage;
  let fixture: ComponentFixture<AssistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

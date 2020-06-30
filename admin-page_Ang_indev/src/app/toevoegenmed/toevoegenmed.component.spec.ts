import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToevoegenmedComponent } from './toevoegenmed.component';

describe('ToevoegenmedComponent', () => {
  let component: ToevoegenmedComponent;
  let fixture: ComponentFixture<ToevoegenmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToevoegenmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToevoegenmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

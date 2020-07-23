import { TestBed } from '@angular/core/testing';

import { WedstrijdenService } from './wedstrijden.service';

describe('WedstrijdenService', () => {
  let service: WedstrijdenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WedstrijdenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

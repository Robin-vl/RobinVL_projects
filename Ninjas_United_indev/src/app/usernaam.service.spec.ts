import { TestBed } from '@angular/core/testing';

import { UsernaamService } from './usernaam.service';

describe('UsernaamService', () => {
  let service: UsernaamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernaamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

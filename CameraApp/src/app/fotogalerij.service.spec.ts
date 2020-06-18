import { TestBed } from '@angular/core/testing';

import { FotogalerijService } from './fotogalerij.service';

describe('FotogalerijService', () => {
  let service: FotogalerijService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotogalerijService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

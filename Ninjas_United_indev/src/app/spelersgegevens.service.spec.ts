import { TestBed } from '@angular/core/testing';

import { SpelersgegevensService } from './spelersgegevens.service';

describe('SpelersgegevensService', () => {
  let service: SpelersgegevensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpelersgegevensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

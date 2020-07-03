import { TestBed } from '@angular/core/testing';

import { FalconeFoundService } from './falcone-found.service';

describe('FalconeFoundService', () => {
  let service: FalconeFoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FalconeFoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

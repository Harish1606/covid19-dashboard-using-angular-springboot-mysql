import { TestBed } from '@angular/core/testing';

import { TamilnaduDataService } from './tamilnadu-data.service';

describe('TamilnaduDataService', () => {
  let service: TamilnaduDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamilnaduDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

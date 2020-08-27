import { TestBed } from '@angular/core/testing';

import { IndiaDataService } from './india-data.service';

describe('IndiaDataService', () => {
  let service: IndiaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

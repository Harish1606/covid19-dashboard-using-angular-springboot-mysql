import { TestBed } from '@angular/core/testing';

import { EpassService } from './epass.service';

describe('EpassService', () => {
  let service: EpassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

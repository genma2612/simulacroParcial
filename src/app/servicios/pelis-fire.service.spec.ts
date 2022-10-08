import { TestBed } from '@angular/core/testing';

import { PelisFireService } from './pelis-fire.service';

describe('PelisFireService', () => {
  let service: PelisFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PelisFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

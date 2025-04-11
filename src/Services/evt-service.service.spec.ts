import { TestBed } from '@angular/core/testing';

import { EvtServiceService } from './evt-service.service';

describe('EvtServiceService', () => {
  let service: EvtServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvtServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

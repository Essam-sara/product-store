import { TestBed } from '@angular/core/testing';

import { ProuductRequestService } from './prouduct-request.service';

describe('ProuductRequestService', () => {
  let service: ProuductRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProuductRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

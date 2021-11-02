import { TestBed } from '@angular/core/testing';

import { MemberServicesService } from './member-services.service';

describe('MemberServicesService', () => {
  let service: MemberServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

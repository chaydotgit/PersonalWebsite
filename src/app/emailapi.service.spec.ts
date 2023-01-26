import { TestBed } from '@angular/core/testing';

import { EmailapiService } from './emailapi.service';

describe('EmailapiService', () => {
  let service: EmailapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

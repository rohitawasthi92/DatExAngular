import { TestBed } from '@angular/core/testing';

import { ViewSubscriptionService } from './view-subscription.service';

describe('ViewSubscriptionService', () => {
  let service: ViewSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

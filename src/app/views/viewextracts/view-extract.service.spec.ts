import { TestBed } from '@angular/core/testing';

import { ViewExtractService } from './view-extract.service';

describe('ViewExtractService', () => {
  let service: ViewExtractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewExtractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

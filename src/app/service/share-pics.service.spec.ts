import { TestBed } from '@angular/core/testing';

import { SharePicsService } from './share-pics.service';

describe('SharePicsService', () => {
  let service: SharePicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharePicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

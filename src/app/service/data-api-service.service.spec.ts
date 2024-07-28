import { TestBed } from '@angular/core/testing';

import { DataAPIServiceService } from './data-api-service.service';

describe('DataAPIServiceService', () => {
  let service: DataAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

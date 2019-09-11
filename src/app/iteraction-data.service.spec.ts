import { TestBed } from '@angular/core/testing';

import { IteractionDataService } from './iteraction-data.service';

describe('IteractionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IteractionDataService = TestBed.get(IteractionDataService);
    expect(service).toBeTruthy();
  });
});

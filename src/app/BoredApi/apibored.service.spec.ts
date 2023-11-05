import { TestBed } from '@angular/core/testing';

import { ApiboredService } from './apibored.service';

describe('ApiboredService', () => {
  let service: ApiboredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiboredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

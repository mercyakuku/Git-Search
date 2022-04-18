import { TestBed } from '@angular/core/testing';

import { RepositoriesServiceService } from './repositories-service.service';

describe('RepositoriesServiceService', () => {
  let service: RepositoriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

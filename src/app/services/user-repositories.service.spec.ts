import { TestBed } from '@angular/core/testing';

import { UserRepositoriesService } from './user-repositories.service';

describe('UserRepositoriesService', () => {
  let service: UserRepositoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRepositoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

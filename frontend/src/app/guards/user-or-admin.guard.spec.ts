import { TestBed } from '@angular/core/testing';

import { UserOrAdminGuard } from './user-or-admin.guard';

describe('UserOrAdminGuard', () => {
  let guard: UserOrAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserOrAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

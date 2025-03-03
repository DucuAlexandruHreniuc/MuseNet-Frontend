import { TestBed } from '@angular/core/testing';

import { UserMusicianService } from './user-musician.service';

describe('UserMusicianService', () => {
  let service: UserMusicianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMusicianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

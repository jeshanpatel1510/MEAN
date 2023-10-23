import { TestBed } from '@angular/core/testing';

import { GetContentsService } from './get-contents.service';

describe('GetContentsService', () => {
  let service: GetContentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetContentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

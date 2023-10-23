import { TestBed } from '@angular/core/testing';

import { RemoveContentService } from './remove-content.service';

describe('RemoveContentService', () => {
  let service: RemoveContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

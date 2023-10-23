import { TestBed } from '@angular/core/testing';

import { EditContentService } from './edit-content.service';

describe('EditContentService', () => {
  let service: EditContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

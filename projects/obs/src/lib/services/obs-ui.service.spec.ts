import { TestBed } from '@angular/core/testing';

import { ObsUIService } from './obs-ui.service';

describe('ObsUIService', () => {
  let service: ObsUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObsUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

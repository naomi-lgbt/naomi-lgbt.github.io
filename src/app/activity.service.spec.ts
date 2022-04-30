import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ActivityService } from './activity.service';

describe('ActivityService', () => {
  let service: ActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

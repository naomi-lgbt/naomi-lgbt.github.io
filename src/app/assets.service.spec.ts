import { TestBed } from '@angular/core/testing';

import { AssetsService } from './assets.service';
import { HttpClientModule } from '@angular/common/http';

describe('AssetsService', () => {
  let service: AssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

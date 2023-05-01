import { TestBed } from '@angular/core/testing';

import { HelpersService } from './helpers.service';

describe('HelpersService', () => {
  let service: HelpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should parse filenames correctly', () => {
    expect(HelpersService.parseFileName('1.png')).toEqual('1');
  });

  it('should sort strings that are in the `Naomi123` format', () => {
    const unsorted = ['Naomi2', 'Becca', 'Naomi1', 'Rosalia', 'Becca2'];
    const sorted = ['Becca', 'Becca2', 'Naomi1', 'Naomi2', 'Rosalia'];
    expect(unsorted.sort(HelpersService.numericSort)).toEqual(sorted);
  });

  it('should sort strings that are in the `Naomi-123` format', () => {
    const unsorted = ['Naomi-2', 'Becca', 'Naomi-1', 'Rosalia', 'Becca-2'];
    const sorted = ['Becca', 'Becca-2', 'Naomi-1', 'Naomi-2', 'Rosalia'];
    expect(unsorted.sort(HelpersService.numericSortWithHyphen)).toEqual(sorted);
  });
});

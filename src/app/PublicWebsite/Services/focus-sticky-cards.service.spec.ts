import { TestBed } from '@angular/core/testing';

import { FocusStickyCardsService } from './focus-sticky-cards.service';

describe('FocusStickyCardsService', () => {
  let service: FocusStickyCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusStickyCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

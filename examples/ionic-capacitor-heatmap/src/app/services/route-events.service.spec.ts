import { TestBed } from '@angular/core/testing';

import { RouteEventsService } from './route-events.service';

describe('RouteEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteEventsService = TestBed.get(RouteEventsService);
    expect(service).toBeTruthy();
  });
});

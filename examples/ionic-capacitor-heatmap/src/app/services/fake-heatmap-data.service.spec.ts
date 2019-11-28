import { TestBed } from '@angular/core/testing';

import { FakeHeatmapDataService } from './fake-heatmap-data.service';

describe('FakeHeatmapDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeHeatmapDataService = TestBed.get(FakeHeatmapDataService);
    expect(service).toBeTruthy();
  });
});

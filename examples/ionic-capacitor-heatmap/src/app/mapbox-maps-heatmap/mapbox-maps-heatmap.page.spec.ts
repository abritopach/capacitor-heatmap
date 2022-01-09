import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapboxMapsHeatmapPage } from './mapbox-maps-heatmap.page';

describe('MapboxMapsHeatmapPage', () => {
  let component: MapboxMapsHeatmapPage;
  let fixture: ComponentFixture<MapboxMapsHeatmapPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxMapsHeatmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapboxMapsHeatmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

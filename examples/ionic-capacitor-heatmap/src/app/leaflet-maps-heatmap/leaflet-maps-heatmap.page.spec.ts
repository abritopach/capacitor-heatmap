import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeafletMapsHeatmapPage } from './leaflet-maps-heatmap.page';

describe('LeafletMapsHeatmapPage', () => {
  let component: LeafletMapsHeatmapPage;
  let fixture: ComponentFixture<LeafletMapsHeatmapPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletMapsHeatmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeafletMapsHeatmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

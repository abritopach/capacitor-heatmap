import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeafletMapsHeatmapPage } from './leaflet-maps-heatmap.page';

describe('LeafletMapsHeatmapPage', () => {
  let component: LeafletMapsHeatmapPage;
  let fixture: ComponentFixture<LeafletMapsHeatmapPage>;

  beforeEach(async(() => {
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

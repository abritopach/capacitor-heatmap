import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoogleMapsHeatmapPage } from './google-maps-heatmap.page';

describe('GoogleMapsHeatmapPage', () => {
  let component: GoogleMapsHeatmapPage;
  let fixture: ComponentFixture<GoogleMapsHeatmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapsHeatmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleMapsHeatmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

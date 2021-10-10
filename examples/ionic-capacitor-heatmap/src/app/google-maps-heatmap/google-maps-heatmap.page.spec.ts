import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoogleMapsHeatmapPage } from './google-maps-heatmap.page';

describe('GoogleMapsHeatmapPage', () => {
  let component: GoogleMapsHeatmapPage;
  let fixture: ComponentFixture<GoogleMapsHeatmapPage>;

  beforeEach(waitForAsync(() => {
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

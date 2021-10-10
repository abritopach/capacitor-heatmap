import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeatmapOverIframePage } from './heatmap-over-iframe.page';

describe('HeatmapOverIframePage', () => {
  let component: HeatmapOverIframePage;
  let fixture: ComponentFixture<HeatmapOverIframePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatmapOverIframePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeatmapOverIframePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

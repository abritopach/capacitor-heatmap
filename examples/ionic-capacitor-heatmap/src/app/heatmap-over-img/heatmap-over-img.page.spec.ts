import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeatmapOverImgPage } from './heatmap-over-img.page';

describe('HeatmapOverImgPage', () => {
  let component: HeatmapOverImgPage;
  let fixture: ComponentFixture<HeatmapOverImgPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatmapOverImgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeatmapOverImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

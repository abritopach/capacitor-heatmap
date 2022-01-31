import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { OpacityRangeComponent } from '../components/popover/opacity-range/opacity-range.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, OpacityRangeComponent]
})
export class HomePageModule {}

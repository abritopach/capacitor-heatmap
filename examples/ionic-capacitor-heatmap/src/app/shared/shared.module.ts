import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NtkmeButtonModule } from '@ctrl/ngx-github-buttons';
import { OpacityRangeComponent } from '../components/popover/opacity-range/opacity-range.component';

@NgModule({
    declarations: [OpacityRangeComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        NtkmeButtonModule
    ],
    exports: [CommonModule, FormsModule, IonicModule, NtkmeButtonModule, OpacityRangeComponent]
})
export class SharedModule { }

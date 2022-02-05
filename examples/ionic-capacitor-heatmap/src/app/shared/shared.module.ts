import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NtkmeButtonModule } from '@ctrl/ngx-github-buttons';
import { RangeComponent } from '../components/popover/range/range.component';

@NgModule({
    declarations: [RangeComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        NtkmeButtonModule
    ],
    exports: [CommonModule, FormsModule, IonicModule, NtkmeButtonModule, RangeComponent]
})
export class SharedModule { }

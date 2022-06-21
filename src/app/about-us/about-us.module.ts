import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AboutUsRoutingModule
    ],
    declarations: [
       AboutUsComponent
    ]
})
export class AboutUsModule { }
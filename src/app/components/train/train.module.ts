import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TrainService } from './train.service';

import { TrainRoutingModule } from './train-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TrainRoutingModule
    ],
    declarations: [],
    providers: [
        TrainService
    ]
})

export class TrainModule { }

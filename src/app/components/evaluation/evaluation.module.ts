import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EvaluationService } from './evaluation.service';

import { EvaluationRoutingModule } from './evaluation-routing.module';

@NgModule({
    imports: [
        CommonModule,
        EvaluationRoutingModule
    ],
    declarations: [],
    providers: [
        EvaluationService
    ]
})

export class EvaluationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IndentService } from './indent.service';

import { IndentRoutingModule } from './indent-routing.module';

@NgModule({
    imports: [
        CommonModule,
        IndentRoutingModule
    ],
    declarations: [],
    providers: [
        IndentService
    ]
})

export class IndentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArchivesService } from './archives.service';

import { ArchivesComponent } from './archives.component';
import { ArchivesRoutingModule } from './archives-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ArchivesRoutingModule
    ],
    declarations: [
        ArchivesComponent
    ],
    providers: [
        ArchivesService
    ]
})

export class ArchivesModule {}

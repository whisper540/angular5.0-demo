import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivesComponent } from './archives.component';
const archivesRoutes: Routes = [
    //
    { path: '', component: ArchivesComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(archivesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ArchivesRoutingModule { }

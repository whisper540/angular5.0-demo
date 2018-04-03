import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const trainRoutes: Routes = [
    //
];

@NgModule({
    imports: [
        RouterModule.forChild(trainRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class TrainRoutingModule { }

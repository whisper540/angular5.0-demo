import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const evaluationRoutes: Routes = [
    //
];

@NgModule({
    imports: [
        RouterModule.forChild(evaluationRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class EvaluationRoutingModule { }

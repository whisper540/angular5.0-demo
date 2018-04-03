import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const indentRoutes: Routes = [
    //
];

@NgModule({
    imports: [
        RouterModule.forChild(indentRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class IndentRoutingModule { }

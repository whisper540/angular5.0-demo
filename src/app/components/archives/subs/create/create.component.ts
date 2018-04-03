import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
    planNum = 1;
    constructor( private router: Router ) {}

    ngOnInit() { }

    goBack() {
        this.router.navigate(['/vessel/archives/search', {}]);
    }

    goPlan(step: number) {
        this.planNum = step;
    }

}

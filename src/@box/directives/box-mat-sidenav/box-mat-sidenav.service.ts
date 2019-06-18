import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class BoxMatSidenavHelperService {
    sidenavInstances: MatSidenav[];

    constructor() {
        this.sidenavInstances = [];
    }

    setSidenav(id, instance): void {
        this.sidenavInstances[id] = instance;
    }

    getSidenav(id): any {
        return this.sidenavInstances[id];
    }
}

import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EventService } from '../events/event.service';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Local Events App';
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [EventService]
    })
], AppComponent);
export { AppComponent };

//# sourceMappingURL=app.component.js.map

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.users = [
            { id: 1, name: 'Amruth Pillai', username: 'amruthpillai' },
            { id: 2, name: 'Kavya Ramesh', username: 'kaav24' },
            { id: 3, name: 'Prabhu Bond', username: 'prabhu.b' }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <header>\n        <nav class=\"navbar navbar-fixed-top navbar-inverse\">\n            <div class=\"navbar-header\">\n                <a href=\"/\" class=\"navbar-brand\">Angular 2 - Getting Started</a>\n            </div>\n        </nav>\n    </header>\n\n    <main>\n        <div class=\"app-body container\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div *ngIf=\"users\">\n                        <h4>List of users on the site:</h4>\n                        <ul class=\"list-group users-list\">\n                            <li class=\"list-group-item\"\n                                *ngFor=\"let user of users\"\n                                (click)=\"selectUser(user)\"\n                                [class.active]=\"user === activeUser\">\n                                {{ user.name }} ({{ user.username }})\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"jumbotron\" *ngIf=\"activeUser\">\n                        <h3>{{ activeUser.name }} <small>({{ activeUser.username }})</small></h3>\n                    </div>\n\n                    <div class=\"jumbotron\" *ngIf=\"!activeUser\">\n                        <h3>Please select a user from the left.</h3>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </main>\n\n    <footer>\n        <div class=\"container text-center\">\n            Copyright &copy; 2016 Amruth Pillai\n        </div>\n    </footer>\n  ",
            styles: ["\n    .app-body { padding: 100px 0 50px 0; }\n    .users-list li { cursor: pointer; }\n    .active {  }\n    footer {font-size: .8em; }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
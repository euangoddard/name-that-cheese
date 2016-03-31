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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var game_service_1 = require('../services/game.service');
var welcome_component_1 = require('./welcome.component');
var cheese_component_1 = require('./cheese.component');
var end_component_1 = require('./end.component');
var cheese_service_1 = require('../services/cheese.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'cheese-app',
            viewProviders: [game_service_1.GameService, cheese_service_1.CheeseService],
            moduleId: module.id,
            templateUrl: './app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
            { path: '/cheeses/:id', name: 'Cheese', component: cheese_component_1.CheeseComponent },
            { path: '/end', name: 'End', component: end_component_1.EndComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRCw2QkFBMEIsMEJBQTBCLENBQUMsQ0FBQTtBQUNyRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QywrQkFBNEIsNEJBQTRCLENBQUMsQ0FBQTtBQWN6RDtJQUFBO0lBQTJCLENBQUM7SUFaNUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsYUFBYSxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBYSxDQUFDO1lBQzNDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1NBQ2hDLENBQUM7UUFDRCxvQkFBVyxDQUFDO1lBQ1gsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7WUFDL0UsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7WUFDcEUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLDRCQUFZLEVBQUU7U0FDdkQsQ0FBQzs7b0JBQUE7SUFDeUIsbUJBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsb0JBQVksZUFBRyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7R2FtZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XG5pbXBvcnQge1dlbGNvbWVDb21wb25lbnR9IGZyb20gJy4vd2VsY29tZS5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGVlc2VDb21wb25lbnR9IGZyb20gJy4vY2hlZXNlLmNvbXBvbmVudCc7XG5pbXBvcnQge0VuZENvbXBvbmVudH0gZnJvbSAnLi9lbmQuY29tcG9uZW50JztcbmltcG9ydCB7Q2hlZXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvY2hlZXNlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGVlc2UtYXBwJyxcbiAgdmlld1Byb3ZpZGVyczogW0dhbWVTZXJ2aWNlLCBDaGVlc2VTZXJ2aWNlXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgbmFtZTogJ1dlbGNvbWUnLCBjb21wb25lbnQ6IFdlbGNvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICB7IHBhdGg6ICcvY2hlZXNlcy86aWQnLCBuYW1lOiAnQ2hlZXNlJywgY29tcG9uZW50OiBDaGVlc2VDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnL2VuZCcsIG5hbWU6ICdFbmQnLCBjb21wb25lbnQ6IEVuZENvbXBvbmVudCB9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7fVxuIl19

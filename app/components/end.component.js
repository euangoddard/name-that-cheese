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
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var game_service_1 = require('../services/game.service');
var EndComponent = (function () {
    function EndComponent(_router, _game) {
        this._router = _router;
        this._game = _game;
    }
    EndComponent.prototype.ngOnInit = function () {
        if (!this._game.is_over()) {
            if (this._game.is_in_progress()) {
                this._router.navigate(['Cheese', { id: this._game.stage }]);
            }
            else {
                this._router.navigate(['Welcome']);
            }
        }
        else {
            this.score = this._game.score;
        }
    };
    EndComponent.prototype.restart = function () {
        this._game.reset();
        this._router.navigate(['Welcome']);
    };
    EndComponent = __decorate([
        core_1.Component({
            selector: 'cheese-end',
            moduleId: module.id,
            templateUrl: './end.component.html',
            styleUrls: [],
            directives: [common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, game_service_1.GameService])
    ], EndComponent);
    return EndComponent;
}());
exports.EndComponent = EndComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2Qyw2QkFBMEIsMEJBQTBCLENBQUMsQ0FBQTtBQVNyRDtJQUdFLHNCQUFvQixPQUFlLEVBQVUsS0FBa0I7UUFBM0MsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWE7SUFBRyxDQUFDO0lBRW5FLCtCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hDLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUEzQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLEVBQUU7WUFDYixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxDQUFDO1NBQzlCLENBQUM7O29CQUFBO0lBc0JGLG1CQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxvQkFBWSxlQXFCeEIsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9lbmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlZXNlLWVuZCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtdLFxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBFbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzY29yZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9nYW1lOiBHYW1lU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5fZ2FtZS5pc19vdmVyKCkpIHtcbiAgICAgICAgaWYgKHRoaXMuX2dhbWUuaXNfaW5fcHJvZ3Jlc3MoKSkge1xuICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0NoZWVzZScsIHtpZDogdGhpcy5fZ2FtZS5zdGFnZX1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydXZWxjb21lJ10pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjb3JlID0gdGhpcy5fZ2FtZS5zY29yZTtcbiAgICAgIH1cbiAgfVxuXG4gIHJlc3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5fZ2FtZS5yZXNldCgpO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1dlbGNvbWUnXSk7XG4gIH1cbn1cbiJdfQ==

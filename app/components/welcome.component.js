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
var WelcomeComponent = (function () {
    function WelcomeComponent(_router, _game) {
        this._router = _router;
        this._game = _game;
        this._game.reset();
    }
    WelcomeComponent.prototype.start = function () {
        this._game.advance();
        this._router.navigate(['Cheese', { id: this._game.stage }]);
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'cheese-welcome',
            moduleId: module.id,
            templateUrl: './welcome.component.html',
            styleUrls: [],
            directives: [common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, game_service_1.GameService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3dlbGNvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsNkJBQTBCLDBCQUEwQixDQUFDLENBQUE7QUFTckQ7SUFDRSwwQkFBb0IsT0FBZSxFQUFVLEtBQWtCO1FBQTNDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGdDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFmSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxFQUFFO1lBQ2IsVUFBVSxFQUFFLENBQUMsd0JBQWUsQ0FBQztTQUM5QixDQUFDOzt3QkFBQTtJQVVGLHVCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSx3QkFBZ0IsbUJBUzVCLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvd2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlZXNlLXdlbGNvbWUnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vd2VsY29tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW10sXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZ2FtZTogR2FtZVNlcnZpY2UpIHtcbiAgICB0aGlzLl9nYW1lLnJlc2V0KCk7XG4gIH1cblxuICBzdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLl9nYW1lLmFkdmFuY2UoKTtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDaGVlc2UnLCB7aWQ6IHRoaXMuX2dhbWUuc3RhZ2V9XSk7XG4gIH1cbn1cbiJdfQ==
